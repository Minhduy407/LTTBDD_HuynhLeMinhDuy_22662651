import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>A premium online store for sporter and their stylish choice</Text>
      <View style={{backgroundColor: '#E941411A',borderRadius: 50}}>
        <Image source={require('../assets/bike.png')} style={styles.image} />
      </View>
      <Text style={styles.title}>POWER BIKE</Text>
      <Text style={styles.title}>SHOP</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold' },
  titleHeader: {fontSize: 16,textAlign: 'center',fontWeight: 'bold'},
  image: { width: 200, height: 200, margin: 20 },
  button: {paddingHorizontal: 16,paddingVertical: 16,backgroundColor: '#E94141',borderRadius: 50,width: 250},
  buttonText: {fontSize: 16,textAlign: 'center',fontWeight: 'bold',color: 'white'}
});
