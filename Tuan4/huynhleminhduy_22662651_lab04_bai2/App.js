import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatListScreen({ navigation }) {
  const [data, setData] = useState([]);

  const API_URL = 'https://6832d5a5c3f2222a8cb3d1aa.mockapi.io/api/v1/product/shops';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text numberOfLines={2} style={styles.name}>{item.name}</Text>
    
    <View style={styles.ratingRow}>
      <Text style={styles.stars}>⭐⭐⭐⭐☆</Text>
      <Text style={styles.ratingText}>(15)</Text>
    </View>

    <View style={styles.priceRow}>
      <Text style={styles.price}>{item.price}đ</Text>
      <Text style={styles.discount}>-39%</Text>
    </View>
  </View>
);



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Chat</Text>
        <Ionicons name="cart" size={24} color="#fff" />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />

      <View style={styles.footer}>
        <Ionicons name="home-outline" size={24} color="#fff" />
        <Ionicons name="chatbox-ellipses-outline" size={24} color="#fff" />
        <Ionicons name="person-outline" size={24} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: "white"
  },
  list: {
    padding: 8,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 8,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  name: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  stars: {
    color: '#f1c40f',
    fontSize: 12,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#999',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: 'black',
    fontWeight: 'bold',
  },
  discount: {
    color: '#999',
    fontWeight: 'bold',
    fontSize: 12,
  },
  header: {
    backgroundColor: '#00aaff',
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    height: 56,
    backgroundColor: '#00aaff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

