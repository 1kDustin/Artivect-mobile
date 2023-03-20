/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import dummyUser from '../../screens/DummyUser';
import {AlbumItem} from '../AlbumItem';

export const Discography = () => {
  const data = dummyUser.discography;
  const columnSize = data.length / 2;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Discography</Text>
      <View>
        <FlatList
          numColumns={3}
          data={data}
          removeClippedSubviews
          renderItem={({item, index}) => {
            const lastItem = index === data.length - 1;
            return (
              <View style={{flex: lastItem ? 2 : 1}}>
                <AlbumItem
                  name={item.albumName}
                  image={item.image}
                  url={item.url}
                />
              </View>
            );
          }}
          keyExtractor={item => item.id}
          extraData={columnSize}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    marginVertical: 12,
    fontSize: 22,
    fontWeight: '500',
  },
});
