import { StyleSheet, Text, View, Dimensions, Image,Button} from 'react-native'
import React from 'react'

var {width} = Dimensions.get("window");

const ProductCart = (props) => {
    const {name, price, image, countInStock} = props;
  return (
    <View 
    style={styles.container}
    resizeMode="contain"
    source={{uri: image ? image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
    >
      <Image style={styles.image}/>
      <View style={styles.card}/>
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
      </Text>
      <Text style={styles.price}>${price}</Text>

      {countInStock > 0 ? (
        <View style={{marginBottom: 60}}>
            <Button title={'Add'} color={'green'}/>
        </View>
      ) : <Text style={{marginTop: 20}}>Currently Unavailable</Text>}
    </View>
  )
}

export default ProductCart

const styles = StyleSheet.create({
    container:{
        width: width / 2 - 20,
        height: width / 1.7,
        padding:10,
        borderRadius:10,
        marginTop:55,
        marginBottom:5,
        marginLeft:10,
        alignItems: "center",
        elevation:8,
        backgroundColor: "white"

    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: "tansparent",
        position: "absolute",
        top: -45,
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: "tansparent",
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
    },
    price: {
        fontSize: 20,
        color: "orange",
        marginTop: 10,
    }

})