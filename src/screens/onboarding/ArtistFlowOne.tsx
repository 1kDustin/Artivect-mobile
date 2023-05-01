/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Avatar} from '../../components/artistOboardingComponents/Avatar';

export const ArtistFlowOne = () => {
  const [userAvatar, setUserAvatar] = useState<any>();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{alignItems: 'center'}}
      style={styles.container}>
      <Animatable.Text animation={'slideInDown'} style={styles.headerInfo}>
        Lets get started with your profile
      </Animatable.Text>
      <Animatable.View animation={'slideInRight'}>
        <Avatar />
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerInfo: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 100,
  },
});
