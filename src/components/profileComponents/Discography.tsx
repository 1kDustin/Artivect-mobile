/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import dummyUser from '../../screens/DummyUser';
import {AlbumItem} from '../AlbumItem';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';

export const Discography = () => {
  const data = dummyUser.discography;
  const columnSize = data.length / 2;
  const [showDiscography, setShowDiscoGraphy] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <View style={styles.sectionTitleContainer}>
        <Text
          style={
            showDiscography
              ? {...styles.sectionTitle, marginBottom: 12}
              : styles.sectionTitle
          }>
          Discography
        </Text>
        {showDiscography ? (
          <TouchableOpacity onPress={() => setShowDiscoGraphy(false)}>
            <Icon name="caretup" size={24} color={colors.mainColor} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setShowDiscoGraphy(true)}>
            <Icon name="caretdown" size={24} color={colors.mainColor} />
          </TouchableOpacity>
        )}
      </View>
      {showDiscography ? (
        <View>
          <FlatList
            scrollEnabled={false}
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
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
});
