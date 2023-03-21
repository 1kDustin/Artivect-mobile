import React from 'react';
import {View, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import dummyUser from '../../screens/DummyUser';

export const Socials = () => {
  const socials = dummyUser.socials;
  const checkForSocial = (val: string) =>
    socials.filter(e => e.name === val) ? true : false;

  const grabSocialUrl = (val: string) => {
    const socialUrl = socials.filter(x => x.name === val);
    return socialUrl[0].url;
  };

  return (
    <View style={styles.container}>
      {checkForSocial('Facebook') && (
        <TouchableOpacity
          onPress={() => Linking.openURL(grabSocialUrl('Facebook'))}>
          <Icon style={styles.iconStyle} name="facebook-square" size={24} />
        </TouchableOpacity>
      )}
      {checkForSocial('Twitter') && (
        <TouchableOpacity
          onPress={() => Linking.openURL(grabSocialUrl('Facebook'))}>
          <Icon style={styles.iconStyle} name="twitter" size={24} />
        </TouchableOpacity>
      )}
      {checkForSocial('Instagram') && (
        <TouchableOpacity
          onPress={() => Linking.openURL(grabSocialUrl('Facebook'))}>
          <Icon style={styles.iconStyle} name="instagram" size={24} />
        </TouchableOpacity>
      )}
      {checkForSocial('Youtube') && (
        <TouchableOpacity
          onPress={() => Linking.openURL(grabSocialUrl('Facebook'))}>
          <Icon style={styles.iconStyle} name="youtube-play" size={24} />
        </TouchableOpacity>
      )}
      {checkForSocial('Reddit') && (
        <TouchableOpacity
          onPress={() => Linking.openURL(grabSocialUrl('Facebook'))}>
          <Icon style={styles.iconStyle} name="reddit" size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  iconStyle: {
    marginHorizontal: 4,
  },
});
