import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import colors from '../../theme/colors';

interface Props {
  phoneNumber: string;
  codeErr: boolean;
  code: string;
  setCode: (val: string) => void;
  confirmCode: () => void;
  isLoading: boolean;
}

export const PhoneAuthCodeModal = ({
  phoneNumber,
  codeErr,
  code,
  setCode,
  isLoading,
  confirmCode,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text
        style={
          styles.infoText
        }>{`We have sent a verification code to ${phoneNumber}. Enter the code below to continue`}</Text>
      <OTPInputView
        style={styles.otpContainer}
        pinCount={6}
        code={code}
        onCodeChanged={(value: string) => setCode(value)}
        autoFocusOnLoad
        placeholderCharacter="0"
        placeholderTextColor={colors.borderColor}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
      />
      {isLoading ? (
        <ActivityIndicator size={'large'} color={colors.mainColor} />
      ) : (
        <TouchableOpacity style={styles.sendAnotherCodeButton}>
          <Text style={styles.sendAnotherCodeText}>Send another code</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={confirmCode} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
      {codeErr && (
        <Text style={styles.incorrectCodeText}>
          {'The code you have entered is incorrect. \n Please try again.'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignSelf: 'center',
    backgroundColor: 'white',
    flex: 1,
    width: '90%',
    borderRadius: 8,
  },
  infoText: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    width: '100%',
    height: 100,
  },
  underlineStyleBase: {
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.borderColor,
  },
  underlineStyleHighLighted: {
    borderColor: colors.mainColor,
    borderWidth: 2,
  },
  incorrectCodeText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 16,
  },
  sendAnotherCodeButton: {
    alignSelf: 'center',
  },
  sendAnotherCodeText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.mainColor,
  },
  confirmButton: {
    height: 50,
    padding: 8,
    backgroundColor: colors.mainColor,
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
  confirmButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
  },
});
