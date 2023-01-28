import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet,Text, SafeAreaView, View } from "react-native";
import { Style } from 'react-native/types';

//screens
import ProductContainer from './Screens/Products/ProductContainer'
import Header from "./Shared/Header";



const App = () => {
  return (
    <View Style={styles.container}>
      <Header/>
     <ProductContainer/>

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
