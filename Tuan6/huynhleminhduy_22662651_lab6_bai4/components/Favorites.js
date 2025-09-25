import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Favorites({ favorites }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sản phẩm đã lưu:</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  item: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 6,
    marginBottom: 8,
  },
});
