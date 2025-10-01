import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ProductDetailScreen({ route }) {
  const [liked, setLiked] = useState(false);
  const { bike } = route.params;
  const discountedPrice = (bike.price * 0.85).toFixed(2);

  return (
    <View style={styles.container}>
   
      <Image source={bike.image} style={styles.image} />

    
      <Text style={styles.title}>{bike.name}</Text>

      
      <View style={styles.priceRow}>
        <Text style={styles.discount}>15% OFF | ${discountedPrice}</Text>
        <Text style={styles.original}>${bike.price}</Text>
      </View>

    
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>
        It is a very important form of writing as we write almost everything in
        paragraphs, be it an answer, essay, story, emails, etc.
      </Text>

   
      <View style={styles.actionRow}>
        <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.iconButton}>
          <FontAwesome
            name={liked ? 'heart' : 'heart-o'}
            size={22}
            color={liked ? 'red' : '#555'}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: { 
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  discount: { 
    fontSize: 18, 
    color: 'green', 
    fontWeight: '600',
  },
  original: { 
    fontSize: 16, 
    textDecorationLine: 'line-through', 
    color: 'gray', 
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 6,
  },
  description: { 
    fontSize: 14,
    color: '#444',
    marginBottom: 20,
    lineHeight: 20,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 15,
  },
  cartButton: {
    backgroundColor: '#E94141',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
