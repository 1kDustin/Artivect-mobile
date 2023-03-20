import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
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

export const Login = () => {
  const dispatch = useDispatch();
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  const [confirm, setConfirm] = useState<any>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [codeErr, setCodeErr] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function onAuthStateChanged(user: any) {
    if (user) {
      dispatch(setFirebaseUserData(user._user));
      dispatch(setIsAuthenticated(true));
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const signInWithPhoneNumber = async (number: any) => {
    const confirmation = await auth().signInWithPhoneNumber(`+1 ${number}`);
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    setIsLoading(true);
    try {
      await confirm.confirm(code);
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
            onChangeText={(formatted, extracted) => setPhoneNumber(extracted)}
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
