import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ProductContainer from '../Screens/Products/ProductContainer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SingleProduct from '../Screens/Products/SingleProduct';


const Stack = createBottomTabNavigator()


function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ProductContainer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Product Detail"
          component={SingleProduct}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
}
export default function HomeNavigator() {
    return <MyStack/>
}