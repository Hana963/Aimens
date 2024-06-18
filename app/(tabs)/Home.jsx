import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Product from "@/components/common components/Product";
import ProductsData from '../../data/products.json'

function Home() {
    
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
            default:
                return null;
        }
    }
    
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.row}>
        <View style={styles.column}>
            {ProductsData.products.filter((_, index) => index % 2 == 0).map((product) => (
                <Product 
                    key={product.id} 
                    image={getImage(product.image)} 
                    title={product.title} 
                    price={product.price} 
                />
            ))}
        </View>
        <View style={styles.column}>
            {ProductsData.products.filter((_, index) => index % 2 == 1).map((product) => (
                <Product
                    key={product.id}
                    image={getImage(product.image)}
                    title={product.title}
                    price={product.price}
                />
            ))}
        </View>
    </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
    },
    row: {
        flexDirection: "row",
    },
    column: {
        margin: 30,
    }
});
