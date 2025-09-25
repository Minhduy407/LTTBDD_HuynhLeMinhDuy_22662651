import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './components/HomeTabs';
import ProductDetails from './components/ProductDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
