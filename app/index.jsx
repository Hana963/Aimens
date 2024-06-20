import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './(tabs)/Profile'
import Home from './(tabs)/Home'
import ProductsData from '../data/products.json'
import Product from "@/components/common components/Product";

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()



function Search() {
  return(
    <View>
      <Text>Search</Text>
    </View>
  )
}

const index = () => {
  return (
    <NavigationContainer independent >
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Search') {
            iconName = 'search-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#b3b3b3',
        tabBarStyle: {backgroundColor: "#7B7F3F"},
        headerTitle: "Aimens Essential Supply",
        headerStyle: {backgroundColor: "#7B7F3F"},
        headerTitleStyle: {color: "white"}
      })}>
        <Tab.Screen name = "Home" component={Home} />
        <Tab.Screen name = "Search" component={Search} />
        <Tab.Screen name = "Profile" component={Profile} />
        {/* <Tab.Screen name = "ProductData" component={Product} 
          options={{ tabBarButton: () => null, 
          tabBarVisible: false }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>

  )
}

export default index

const styles = StyleSheet.create({})