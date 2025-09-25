import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PRODUCTS = [
  { id: '1', name: 'iPhone 15 Pro' },
  { id: '2', name: 'Samsung S24 Ultra' },
  { id: '3', name: 'Xiaomi 14' },
];

export default function Products({ onToggleFavorite, favorites }) {
  const navigation = useNavigation();

  const isFavorite = (product) =>
    favorites.some((item) => item.id === product.id);

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductDetails', { product: item })
              }
            >
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>

            <Button
              title={isFavorite(item) ? 'Bỏ lưu' : 'Lưu'}
              onPress={() => onToggleFavorite(item)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
  },
});
