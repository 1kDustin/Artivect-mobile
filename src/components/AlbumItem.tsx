import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  Linking,
} from 'react-native';

interface Props {
  name: string;
  image: string;
  url: string;
}

export const AlbumItem = ({name, image, url}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(url)}
      style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    width: 100,
    height: 100,
    marginHorizontal: 6,
    marginTop: 6,
    marginBottom: 20,
  },
  image: {
    borderRadius: 8,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  name: {
    marginTop: 4,
    fontSize: 14,
    textAlign: 'center',
  },
});
