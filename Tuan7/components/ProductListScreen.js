import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import bikes from '../data/bikes';
import BikeCard from '../components/BikeCard';
import FilterTabs from '../components/FilterTabs';

export default function ProductListScreen({ navigation }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredBikes = selectedFilter === 'All'
    ? bikes
    : bikes.filter(bike => bike.type.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        The world’s Best Bike
      </Text>

      <FilterTabs selected={selectedFilter} onSelect={setSelectedFilter} />

      <FlatList
        data={filteredBikes}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({ item }) => (
          <BikeCard
            bike={item}
            onPress={() => navigation.navigate('ProductDetail', { bike: item })}
          />
        )}
      />
    </View>
  );
}
