import {
  StyleSheet,
  SafeAreaSafeAreaView,
  Text,
  SafeAreaView,
} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={require('../assets/Logo.png')}
        resizeMode="contain"
        style={{height: 50}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 80,
  },
});
