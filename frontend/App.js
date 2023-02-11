import React from 'react';
import { StyleSheet, LogBox, View } from 'react-native';

LogBox.ignoreAllLogs(true);
//screens
import ProductContainer from './Screens/Products/ProductContainer';
import Header from './Share/Header';
// import Header from './Shared/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ProductContainer/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});