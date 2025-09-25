import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data ={data}
        keyExtractor = {item => item.id}
        renderItem={({item}) =>(
          <View style={styles.listItem}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

function SearchScreen() {
  const [keyword,setKeyword] = useState('')
  return (
    <View style={styles.container}>
      <TextInput
        style = {styles.textInput}
        placeholder= "Nhập từ khóa tìm kiếm"
        value = {keyword}
        onChangeText = {setKeyword}
        />
        <Text style={{marginTop : 10}}> Bạn đang tìm: {keyword} </Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.containerCenter}>
      <Image
        source={{
          uri: 'https://randomuser.me/api/portraits/men/1.jpg',
        }}
        style={styles.avatar}
      />
      <Text style={styles.profileName}>Nguyễn Văn A</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions = {({route}) => ({
          tabBarIcon :  ({focus, color, size}) => {
            let iconName;

            if(route.name === 'Home') iconName = focus ? 'home' : 'home-outline';
            else if(route.name === 'Search') iconName = focus ? 'search' : 'search-outline';
            else if(route.name === 'Profile') iconName = focus ? 'person' : 'person-outline';

            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor : 'tomato',
          tabBarInactiveTintColor : 'gray',
          headerShown : false
        })}
        >
        <Tab.Screen name = "Home" component = {HomeScreen} />
        <Tab.Screen name = "Search" component = {SearchScreen} />
        <Tab.Screen name = "Profile" component = {ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  containerCenter: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#fff'
  },
  listItem: {
    padding: 16
  },
  textInput: {
    height : 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  avatar: {
    width: 100,
    height : 100,
    borderRadius : 50
  },
  profileName: {
    marginTop : 20,
    fontSize : 18,
    fontWeight : 'bold'
  },
});
