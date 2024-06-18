import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Product = ({image, title, price}) => {
    const maxlimit = 20

  return (
    <View>
        <View style={styles.column} >
            <Image source={image} style={styles.image} />
        </View>
        <View>
            <Text style={styles.title} >{ ((title).length > maxlimit) ? 
    (((title).substring(0,maxlimit-3)) + '...') : 
    title }</Text>
        </View>
        <View>
            <Text>£{price}</Text>
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
    },
    title: {
        textAlign: 'center',
        width: '50%',
    }
    // column: {
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     width: '50%',
    // }
})