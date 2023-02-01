import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import ProductCart from './ProductCart';


var { width} = Dimensions.get("window");
const ProductList = (props) => {
    const {item} = props;
  return (
    <TouchableOpacity style={{width: '50%'}}>
        <View style={{width: width/2, backgroundColor: 'gainsboro'}}>
            <ProductCart {...item}/>


        </View>

    </TouchableOpacity>
  )
}

export default ProductList