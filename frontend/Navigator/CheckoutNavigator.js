import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//screens
import Checkout from '../Screens/Cart/CheckOut/CheckOut';
import Confirm from '../Screens/Cart/CheckOut/Confirm';
import Payment from './../Screens/Cart/CheckOut/Payment';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shipping" component={Checkout} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </Tab.Navigator>
  );
}

export default function CheckoutNavigator() {
  return <MyTabs />;
}
