// import {StatusBar} from 'react-native';
import React from 'react';
import {StyleSheet, Text, SafeAreaView,LogBox, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

//Navigator
import Main from './Navigator/Main'

//screens
import Header from './Shared/Header';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
        <Header />
        <Main/>
        {/* <ProductContainer /> */}
    </NavigationContainer>
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
