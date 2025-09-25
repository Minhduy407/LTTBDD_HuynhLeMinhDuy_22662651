import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function DetailsScreen({ navigation }) {
  const [selectedColor, setSelectedColor] = useState('#234896'); // Mặc định màu xanh

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleConfirm = () => {
    navigation.navigate('Home', { selectedColor });
  };

  const getImageByColor = (color) => {
    switch (color) {
      case '#BEE5F7':
        return require('../assets/vs_silver.png');
      case '#F10000':
        return require('../assets/vs_red.png');
      case '#000000':
        return require('../assets/vs_black.png');
      case '#234896':
      default:
        return require('../assets/vs_blue.png');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={getImageByColor(selectedColor)}
          style={styles.productImage}
        />
        <Text style={styles.productTitle}>
          Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng
        </Text>
      </View>

      <Text style={styles.title}>Chọn một màu bên dưới:</Text>

      <View style={styles.containerColorbox}>
        {['#BEE5F7', '#F10000', '#000000', '#234896'].map((color) => (
          <TouchableOpacity
            key={color}
            style={[
              styles.colorBox,
              { backgroundColor: color },
              selectedColor === color ? styles.colorBoxSelected : null,
            ]}
            onPress={() => handleColorSelect(color)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.xongBtn} onPress={handleConfirm}>
        <Text style={styles.xongBtnText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  productImage: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
    marginRight: 12,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  containerColorbox: {
    alignItems: 'center',
    marginBottom: 24,
  },
  colorBox: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginBottom : 10
  },
  colorBoxSelected: {
    borderWidth: 3,
    borderColor: '#000',
  },
  xongBtn: {
    backgroundColor: '#234896',
    padding: 14,
    alignItems: 'center',
    borderRadius: 50,
  },
  xongBtnText: { color: '#fff', fontWeight: 'bold' },
});
