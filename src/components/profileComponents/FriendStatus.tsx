import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/AntDesign';

export const FriendStatus = () => {
  const areFriends = false;

  return (
    <>
      {areFriends ? (
        <TouchableOpacity style={styles.friendContainer}>
          <Text style={styles.addFriendText}>Friends</Text>
          <Icon style={styles.icon} name="caretdown" size={16} color="#FFF" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.addFriend}>
          <Text style={styles.addFriendText}>Add Friend</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  addFriend: {
    borderRadius: 8,
    backgroundColor: colors.mainColor,
    padding: 8,
  },
  addFriendText: {
    color: '#FFF',
  },
  friendContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: colors.mainColor,
    padding: 8,
    alignItems: 'center',
  },
  icon: {
    marginLeft: 4,
  },
});
