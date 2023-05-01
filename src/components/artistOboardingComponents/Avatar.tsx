import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useSelector} from 'react-redux';

export const Avatar = () => {
  const usersCollection = firestore().collection('users');
  const firebaseUser = useSelector(
    (state: any) => state?.authSlice.firebaseUserData,
  );
  const bucketRef = storage().ref(firebaseUser.uid);

  async function hasAndroidPermission() {
    const permission =
      Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  async function savePictureAndroid() {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
  }

  const saveImageIOS = async () => {
    try {
        await bucketRef.putFile()
    //   let url = await storage().ref(`avatars/${uid}`).getDownloadURL();

    //   await usersCollection.doc(uid).update({
    //     avatar: url,
    //   });
      //   dispatch(setUserAvatar(url));
    } catch (err) {
      console.log('err', err);
    }
  };

  const openCameraRoll = () => {
    ImagePicker.openPicker({
      cropping: true,
      cropperCircleOverlay: true,
      multiple: false,
    })
      .then(image => {
        console.log(image);
        //   SetAvatar(image);
      })
      .catch(err => console.log('err', err));
  };

  return (
    <TouchableOpacity onPress={() => openCameraRoll()} style={styles.container}>
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
