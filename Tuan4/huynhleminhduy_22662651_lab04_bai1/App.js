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
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        {item.name ? <Text style={styles.name}>{item.name}</Text> : null}
        <Text style={styles.shop}>{item.shop}</Text>
      </View>
      <TouchableOpacity
        style={styles.chatButton}
      >
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
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
  container:{
    flex: 1,
    backgroundColor: "white"
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00aaff',
    padding: 15
  },
  headerTitle:{
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  footer:{
    height: 56,
    backgroundColor: '#00aaff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  shop: {
    color: 'red',
  },
  chatButton: {
    backgroundColor: 'red',
    borderRadius: 6,
    padding: 16,
    margin: 6
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
});
