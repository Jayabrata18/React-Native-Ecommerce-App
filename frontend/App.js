// import {StatusBar} from 'react-native';
import React from 'react';
import {StyleSheet, Text, SafeAreaView,LogBox, View} from 'react-native';

//screens
import ProductContainer from './Screens/Products/ProductContainer';
import Header from './Shared/Header';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Text style={styles.text}>hi how are you</Text> */}
      <ProductContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
  //   color: '#FFFFFF',
  //   fontSize: '15px',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
