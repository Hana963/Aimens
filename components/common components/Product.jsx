import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Product = ({image, title, price}) => {
    const maxlimit = 20

  return (
    <View style={styles.productContainer}>
        <View style={styles.column} >
            <Image source={image} style={styles.image} />
        </View>
        <View>
            <Text style={styles.title} >{ ((title).length > maxlimit) ? 
    (((title).substring(0,maxlimit-3)) + '...') : 
    title }</Text>
        </View>
        <View>
            <Text style={styles.price} >£{price}</Text>
        </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    productContainer: {
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    image: {
        width: 130,
        height: 130,
        margin: 5,
        resizeMode: 'contain',
        borderRadius: 10,
        
    },
    title: {
        textAlign: 'center',
        width: '100%',
        paddingTop: 10,
        height: "50px",
    },
    price: {
        paddingTop: 5,
        // paddingBottom: 25,
        // marginLeft: 30,
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        // width: '80%',
    }
})