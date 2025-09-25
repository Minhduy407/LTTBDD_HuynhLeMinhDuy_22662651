import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';

export default function DetailsScreen({ navigation }) {
  const [colorsData, setColorsData] = useState([]);
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://6832d5a5c3f2222a8cb3d1aa.mockapi.io/api/v1/product/shops')
      .then((res) => res.json())
      .then((data) => {
        setColorsData(data);
        if (data.length > 0) {
          setSelectedColorId(data[0].id);
          setSelectedImage(data[0].image);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching colors:', error);
        setLoading(false);
      });
  }, []);

  const handleColorSelect = (id) => {
    setSelectedColorId(id);
    const selected = colorsData.find((item) => item.id === id);
    if (selected) {
      setSelectedImage(selected.image);
    }
  };

  const handleConfirm = () => {
    navigation.navigate('Home', { selectedImage });
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#234896" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {selectedImage && (
          <Image
            source={{ uri: selectedImage }}
            style={styles.productImage}
          />
        )}
        <Text style={styles.productTitle}>
          Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng
        </Text>
      </View>

      <Text style={styles.title}>Chọn một màu bên dưới:</Text>

      <View style={styles.containerColorbox}>
        {colorsData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.colorBox,
              { backgroundColor: item.namecolor },
              selectedColorId === item.id ? styles.colorBoxSelected : null,
            ]}
            onPress={() => handleColorSelect(item.id)}
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
    marginBottom: 10
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
