import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { getImage } from './Images';

export default function ProductInfo() {
  const route = useRoute();
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={getImage(product.image)} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{`£${product.price}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '99%',
    height: '40%',
    marginBottom: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: 'gray',
  },
});
