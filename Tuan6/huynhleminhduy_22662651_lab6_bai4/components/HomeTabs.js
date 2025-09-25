import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './Products';
import Favorites from './Favorites';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (product) => {
    const exists = favorites.find((p) => p.id === product.id);
    if (exists) {
      setFavorites(favorites.filter((p) => p.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name="Products">
        {() => (
          <Products
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Favorites">
        {() => <Favorites favorites={favorites} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
