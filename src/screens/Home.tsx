import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>HOMEHOMEHOMHEOMHEOMHEOHMEOHMEOHMEOMHEOHMEOHMEOHMEOHMEOHM</Text>
      <Icon name="stepforward" size={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
