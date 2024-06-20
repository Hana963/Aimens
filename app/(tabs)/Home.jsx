import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Product from "@/components/common components/Product";
import ProductsData from '../../data/products.json'
import { useNavigation } from "@react-navigation/native";

function Home() {
    const navigation = useNavigation();
    
    const getImage = (image) => {
        switch(image) {
            case "20_couch_rolls":
                return require("../../assets/images/20_couch_rolls.jpg")
            case "one shot drain":
                return require("../../assets/images/one shot drain.jpg")
            case "20 Eco couch rolls":
                return require("../../assets/images/20 eco couch rolls.jpg")
            case "blue rolls":
                return require("../../assets/images/blue rolls.jpg")
            case "100 vinyl gloves":
                return require("../../assets/images/100 vinyl gloves.jpg")
            case "softesse tissues":
                return require("../../assets/images/softesse tissues.png")
            case "10 couch roll multiple":
                return require("../../assets/images/10 couch roll.jpg")
            case "grapeseed oil":
                return require("../../assets/images/grapeseed oil.jpg")
            case "daz":
                return require("../../assets/images/daz.jpg")
            case "face mask":
                return require("../../assets/images/face mask.jpg")
            case "almond oil":
                return require("../../assets/images/almond oil.jpg")
            case "soya bean":
                return require("../../assets/images/soya bean.jpg")
            case "couch rolls 10":
                return require("../../assets/images/couch rolls 10.png")
            case "hand sanitiser":
                return require("../../assets/images/hand sanitiser.png")
            case "couch rolls 20":
                return require("../../assets/images/couch rolls 20.png")
            case "surgical":
                return require("../../assets/images/surgical.jpg")
            default:
                return null;
        }
    }
    
  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title} >Welcome!</Text>
    <View style={styles.row}>
        <View style={styles.column}>
            {ProductsData.products.filter((_, index) => index % 2 == 0).map((product) => (
                <TouchableOpacity 
                    key={product.id}
                    onPress={() => navigation.navigate('ProductData', {product})}
                >
                    <Product 
                        // key={product.id} 
                        image={getImage(product.image)} 
                        title={product.title} 
                        price={product.price} 
                    />
                </TouchableOpacity>
            ))}
        </View>
        <View style={styles.column}>
            {ProductsData.products.filter((_, index) => index % 2 == 1).map((product) => (
                <TouchableOpacity
                    key={product.id}
                    onPress={() => navigation.navigate('ProductData', {product})}
                >
                    <Product
                        // key={product.id}
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
        // flexDirection: "row",
        // justifyContent: "center",
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
    }
});
