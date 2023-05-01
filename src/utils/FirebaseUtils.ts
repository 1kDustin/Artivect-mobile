import auth from '@react-native-firebase/auth';

export const logout = () => {
  try {
    auth().signOut();
  } catch (err) {
    console.log('signout err', err);
  }
};
