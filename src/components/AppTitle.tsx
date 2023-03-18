import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../theme/colors';
import fonts from '../theme/fonts';

export const AppTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Artivect</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 24,
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    fontFamily: fonts.title,
    color: colors.mainColor,
    alignSelf: 'center',
  },
});
