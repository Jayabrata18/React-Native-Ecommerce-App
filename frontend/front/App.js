import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet,Text, view } from "react-native";
import { Style } from 'react-native/types';

//screens
import ProductContainer from './Screens/products/ProductContainer'



const App = () => {
  return (
    <View Style={styles.container}>

    </View>

  );
}

const styles = StyleSheet.container({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
