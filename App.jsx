import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Signup from './screens/Signup'
import Login from './screens/Login'
const Stack=createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signup' >
        <Stack.Screen name='Signup' component={Signup} ></Stack.Screen>
        <Stack.Screen name='Login' component={Login} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})