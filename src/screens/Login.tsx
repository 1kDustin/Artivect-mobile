import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import colors from '../theme/colors';
import {AppTitle} from '../components/AppTitle';
import auth from '@react-native-firebase/auth';
import {PhoneAuthCodeModal} from '../components/loginComponents/PhoneAuthCodeModal';
import {useDispatch} from 'react-redux';
import {setFirebaseUserData, setIsAuthenticated} from '../slices/AuthSlice';
import TextInputMask from 'react-native-text-input-mask';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

export const Login = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const usersCollection = firestore().collection('users');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  const [confirm, setConfirm] = useState<any>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [codeErr, setCodeErr] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  const [isNewUser, setIsNewUser] = useState<boolean>();
  const [confirmRes, setConfirmRes] = useState<any>();

  const createAccount = async () => {
    await usersCollection
      .doc(user.uid)
      .set({
        userId: user.uid,
        phoneNumber: phoneNumber,
      })
      .catch(err => console.log('error', err));
    navigation.navigate('ArtistOnboarding' as never);
  };

  function onAuthStateChanged(userData: any) {
    if (userData) {
      setUser(userData._user);
      dispatch(setFirebaseUserData(userData._user));
      if (isNewUser === true && confirmRes) {
        createAccount();
      } else if (isNewUser === false) {
        dispatch(setIsAuthenticated(true));
      }
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [confirm, confirmRes, isNewUser]);

  const signInWithPhoneNumber = async (number: any) => {
    const confirmation = await auth().signInWithPhoneNumber(`+1 ${number}`);
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    setIsLoading(true);
    try {
      await confirm.confirm(code).then((res: any) => {
        setIsNewUser(res.additionalUserInfo.isNewUser);
        setConfirmRes(res);
      });
    } catch (error) {
      setCodeErr(true);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AppTitle />
      </View>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Text style={styles.text}>
          {'Enter your phone number to login or get \n signed up'}
        </Text>
        <View>
          <TextInputMask
            keyboardType="phone-pad"
            style={styles.textInput}
            placeholder="+1 (999) 999-9999"
            value={phoneNumber}
            onChangeText={(formatted, extracted) =>
              setPhoneNumber(extracted as any)
            }
            mask={'+1 ([000]) [000] [0000]'}
          />
          {!confirm && (
            <TouchableOpacity
              onPress={() => signInWithPhoneNumber(phoneNumber)}
              style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
      <View />
      {confirm && (
        <View style={styles.authModalContainer}>
          <PhoneAuthCodeModal
            phoneNumber={phoneNumber}
            codeErr={codeErr}
            code={code}
            setCode={(val: any) => setCode(val)}
            confirmCode={confirmCode}
            isLoading={isLoading}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 12,
    alignItems: 'center',
  },
  titleContainer: {
    top: 120,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 30,
  },
  textInput: {
    height: 50,
    padding: 8,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  continueButton: {
    height: 50,
    padding: 8,
    backgroundColor: colors.mainColor,
    justifyContent: 'center',
    borderRadius: 8,
  },
  continueButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
  },
  authModalContainer: {
    position: 'absolute',
    top: 180,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 9,
  },
});
