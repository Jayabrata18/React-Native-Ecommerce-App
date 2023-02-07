// import {StatusBar} from 'react-native';
import React from 'react';
import {StyleSheet, Text, SafeAreaView,LogBox, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

//redux
import {Provider} from 'react-redux';
import store from './Redux/Store';

//Navigator
import Main from './Navigator/Main'

//screens
import Header from './Shared/Header';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
        {/* <ProductContainer /> */}
      </NavigationContainer>
    </Provider>
  );
}

