import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../screens/CartScreen'


const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        
        headerTitleStyle: {
          fontFamily: 'OpenSans_700Bold'
        }
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Carrito de compras'
        }}
      />
    </Stack.Navigator>
  )
}

export default CartNavigator

const styles = StyleSheet.create({})