// import { Stack } from "expo-router";
// import React from "react";

// export default function RootLayout() {
//   return (
//     <Stack screenOptions={() => ({headerShown: false})}>
//       <Stack.Screen name="index" />
//       <Stack.Screen name="ProductData" />
//     </Stack>
//   );
// }
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './(tabs)/Home'
import ProductsData from '../data/products.json'
import ProductData from "../components/common components/Product";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="ProductData" component={Product} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default App;
