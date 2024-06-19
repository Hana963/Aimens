import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Product = ({image, title, price}) => {
    const maxlimit = 20

  return (
    <View>
        <View style={styles.column} >
            <Image source={image} style={[styles.image, { borderColor: "green", borderWidth: 1 }]} />
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
    image: {
        width: 120,
        height: 120,
        margin: 5,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    title: {
        textAlign: 'center',
        width: '70%',
        paddingTop: 10,
        height: "50px",
    },
    price: {
        padding: 5,
        marginLeft: 20,
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
    }
})