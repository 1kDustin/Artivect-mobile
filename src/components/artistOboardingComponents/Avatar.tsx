import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Avatar = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.buttonContainer}>
        <Icon name="person-add" size={45} />
      </View>
      <Text style={styles.text}>{'Top to add a \n profile picture'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    borderRadius: 8,
    borderWidth: 2,
    padding: 12,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 4,
  },
});
