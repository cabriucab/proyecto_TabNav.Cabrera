

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import BreadDetailScreen from '../screens/BreadDetailScreen'
import Intro from '../screens/Intro'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Intro" >
        <Drawer.Screen name="Intro" component={Intro} options={{ headerShown: false , drawerLabel: () => null,
        title: undefined}} />
        <Drawer.Screen name="Login" component={Login} options={{ headerShown: false , drawerLabel: () => null,
        title: undefined}} />
        <Drawer.Screen name="Home" component={CategoriesScreen} />
        <Drawer.Screen name="Productos" component={CategoryBreadScreen}  />
        <Drawer.Screen name="Detalles" component={BreadDetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

  )
}

export default ShopNavigator