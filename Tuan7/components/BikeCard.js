import React,{useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function BikeCard({ bike, onPress }) {
  const [liked, setLiked] = useState(false);
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
    <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => setLiked(!liked)}
      >
        <FontAwesome
          name={liked ? 'heart' : 'heart-o'}
          size={20}
          color={liked ? 'red' : '#888'}
        />
      </TouchableOpacity>
      <Image source={bike.image} style={styles.image} />
      <Text style={styles.name}>{bike.name}</Text>
      <Text style={styles.price}>${bike.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  heartIcon:{
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 6,
    zIndex: 1,
  },
  card: {
    backgroundColor: '#F7BA8326',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
});
