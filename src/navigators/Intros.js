

import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Intro from '../screens/Intro'



const Stack = createNativeStackNavigator();

const Intros = () => {
  return (
   
      <Stack.Navigator initialRouteName="Introd" >
         <Stack.Screen name="Introd" component={Intro} options={{ headerShown: false , stackLabel: () => null,
        title: undefined}} />
      </Stack.Navigator>
   

  )
}

export default Intros