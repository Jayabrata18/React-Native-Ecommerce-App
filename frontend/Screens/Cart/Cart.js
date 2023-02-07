import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {connect} from 'react-redux';
import cartItems from './../../Redux/Reducers/cartItem';


const Cart = () => {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  )
}
const mapStateToProps = (state) => {
    const {cartItems} = state;
    return {
        cartItems: cartItems
    }
}

export default connect (mapStateToProps, null)(Cart);

// const styles = StyleSheet.create({})