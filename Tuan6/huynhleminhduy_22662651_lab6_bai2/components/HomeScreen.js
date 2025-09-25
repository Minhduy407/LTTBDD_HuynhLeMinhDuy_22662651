import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const selectedImageUrl =
    route.params?.selectedImage ||
    'https://res.cloudinary.com/dft2qxyu0/image/upload/v1758676553/nbwjmtb00agh85y6tigv.png';

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedImageUrl }} style={styles.image} />
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

      <Text style={styles.rating}>⭐⭐⭐⭐⭐ (Xem 828 đánh giá)</Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>1.790.000 đ</Text>
        <Text style={styles.oldPrice}>1.790.000 đ</Text>
      </View>

      <Text style={styles.refundText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>

      <TouchableOpacity
        style={styles.selectColorBtn}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
        <Text style={styles.buttonText}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyBtn}>
        <Text style={styles.buyBtnText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flex: 1 },
  image: { width: '100%', height: 200, resizeMode: 'contain', marginBottom: 8 },
  title: { fontWeight: 'bold', fontSize: 18, marginBottom: 4 },
  rating: { marginBottom: 10, color: '#555' },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  price: { fontWeight: 'bold', fontSize: 18, color: 'red', marginRight: 10 },
  oldPrice: { textDecorationLine: 'line-through', color: '#888' },
  refundText: { color: 'red', fontSize: 12, marginBottom: 16 },
  selectColorBtn: {
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 16,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: { fontWeight: 'bold' },
  buyBtn: {
    backgroundColor: 'red',
    padding: 14,
    alignItems: 'center',
    borderRadius: 50,
  },
  buyBtnText: { color: '#fff', fontWeight: 'bold' },
});
