import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Linking,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../slices/AuthSlice';
import colors from '../theme/colors';
import {logout} from '../utils/FirebaseUtils';
import {SliderBox} from 'react-native-image-slider-box';
import dummyUser from './DummyUser';
import {Discography} from '../components/profileComponents/Discography';
import {Divider} from '../components/Divider';

export const Profile = () => {
  const dispatch = useDispatch();
  const userName = dummyUser.userName;
  const website = dummyUser.userWebsite;
  const userType = dummyUser.userType;
  const userImage = dummyUser.userImage;
  const images = dummyUser.headerImages;
  const genre =
    dummyUser.genre.length > 1
      ? dummyUser.genre.map((e: string) => ' ' + e)
      : dummyUser.genre[0];

  const handleUserLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
    dispatch(logoutUser());
  };

  return (
    <View style={styles.container}>
      {userType === 'Artist' && (
        <SliderBox
          images={images}
          imageLoadingColor={colors.mainColor}
          // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        />
      )}
      <ScrollView
        contentInset={{bottom: 120}}
        contentContainerStyle={styles.subContainer}>
        <View style={styles.imageAndNameContainer}>
          <TouchableOpacity style={styles.userImageContainer}>
            <Image style={styles.userImage} source={{uri: userImage}} />
          </TouchableOpacity>
          <View>
            <Text style={styles.userName}>{userName}</Text>
            <Text>{`Genre: ${genre}`}</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(dummyUser.userWebsite)}>
              <Text style={styles.websiteText}>{website ? website : null}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userImage} />
        </View>
        <View style={styles.userBioContainer}>
          <TextInput
            multiline
            style={styles.userBio}
            value={dummyUser.userBio}
          />
        </View>
        <Divider />
        <Discography />
        <Divider />
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleUserLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    padding: 12,
  },
  imageAndNameContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutButton: {
    height: 50,
    padding: 8,
    backgroundColor: colors.mainColor,
    justifyContent: 'center',
    borderRadius: 8,
  },
  logoutButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
  },
  websiteText: {
    color: colors.mainColor,
  },
  userImageContainer: {
    borderRadius: 25,
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
  },
  userBioContainer: {
    marginTop: 16,
  },
  userBio: {
    textAlign: 'center',
  },
});
