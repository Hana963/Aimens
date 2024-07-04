import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './(tabs)/Home';
import Search from './(tabs)/Search';
import ProductInfo from "../components/common components/ProductInfo";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from './(tabs)/Profile'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={() => ({
        headerStyle: {backgroundColor: "#7B7F3F"},
        headerTitleStyle: {color: "white"},
        headerTintColor: 'white',
        headerTitle: "Aimens Essential Supply",
    })}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator screenOptions={() => ({
        headerStyle: {backgroundColor: "#7B7F3F"},
        headerTitleStyle: {color: "white"},
        headerTintColor: 'white',
        headerTitle: "Aimens Essential Supply",
    })}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={() => ({
        headerStyle: {backgroundColor: "#7B7F3F"},
        headerTitleStyle: {color: "white"},
        headerTintColor: 'white',
        headerTitle: "Aimens Essential Supply",
    })}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer independent>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = 'home-outline';
          } else if (route.name === 'SearchStack') {
            iconName = 'search-outline';
          } else if (route.name === 'ProfileStack') {
            iconName = 'person-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#b3b3b3',
        tabBarStyle: {backgroundColor: "#7B7F3F"},
      })}>
        <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
        <Tab.Screen name="SearchStack" component={SearchStack} options={{ title: 'Search' }} />
        <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: 'Profile' }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
