import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../theme/colors';

export const Divider = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    borderTopWidth: 1,
    borderColor: colors.borderColor,
    opacity: 0.3,
  },
});
