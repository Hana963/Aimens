import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Product from "@/components/common components/Product";
import ProductsData from '../../data/products.json';
import { useNavigation } from "@react-navigation/native";
import {getImage} from '@/components/common components/Images.js'

function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          {ProductsData.products.filter((_, index) => index % 2 === 0).map((product) => (
            <TouchableOpacity
              key={product.id}
              onPress={() => navigation.navigate('ProductInfo', { product })}
            >
              <Product
                image={getImage(product.image)}
                title={product.title}
                price={product.price}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.column}>
          {ProductsData.products.filter((_, index) => index % 2 === 1).map((product) => (
            <TouchableOpacity
              key={product.id}
              onPress={() => navigation.navigate('ProductInfo', { product })}
            >
              <Product
                image={getImage(product.image)}
                title={product.title}
                price={product.price}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f7f5",
    padding: 10,
  },
  title: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  column: {
    margin: 30,
  },
});
