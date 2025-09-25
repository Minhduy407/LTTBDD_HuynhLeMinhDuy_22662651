import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductDetails({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi tiết sản phẩm</Text>
      <Text style={styles.name}>{product.name}</Text>
      <Text>ID: {product.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  name: { fontSize: 18 },
});
