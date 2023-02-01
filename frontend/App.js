import {StatusBar} from 'react-native';
import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';

//screens
import ProductContainer from './Screens/Products/ProductContainer';
import Header from './Shared/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ProductContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
