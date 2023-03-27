

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import DetailScreen from '../screens/DetailScreen'
import Login from '../screens/Login'

//const stack = createstackNavigator();
const Stack = createNativeStackNavigator();





const ShopNavigator = () => {
  return (

 
   
      <Stack.Navigator initialRouteName="Login"  >
      
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false , stackLabel: () => null,
        title: undefined}}  />
        <Stack.Screen name="Home" component={CategoriesScreen} />
        <Stack.Screen name="Productos" component={CategoryBreadScreen} options={({ route }) => ({ title: route.params.categoryName })} />
        <Stack.Screen name="Detalles" component={DetailScreen} />
      </Stack.Navigator>
   

  )
}

export default ShopNavigator