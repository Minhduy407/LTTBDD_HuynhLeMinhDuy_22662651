import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function FilterTabs({ selected, onSelect }) {
  const tabs = ['All', 'Roadbike', 'Mountain'];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => onSelect(tab)}
          style={[
            styles.tab,
            selected === tab && styles.selectedTab
          ]}
        >
          <Text style={[
            styles.text,
            selected === tab && styles.selectedText
          ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 12,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 6,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  selectedTab: {
    backgroundColor: '#ff6b6b',
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
