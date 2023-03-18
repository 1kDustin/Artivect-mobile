import React from 'react';
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

export const Login = () => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <View style={styles.container}>
      <AppTitle />
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Text style={styles.text}>
          {'Enter your phone number to login \n or get signed up'}
        </Text>
        <View>
          <TextInput
            keyboardType="phone-pad"
            style={styles.textInput}
            placeholder="+(999) 999-9999"
          />
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View />
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
});
