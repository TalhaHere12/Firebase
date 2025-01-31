import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Signup from './screens/Signup'
import Login from './screens/Login'
import Profile from './screens/Profile'
import AuthStateHook from './Hooks/AuthStateHook'
import Home from './screens/Home'
import TaskScreen from './screens/TaskScreen'
const Stack=createNativeStackNavigator()
const App = () => {
  const {user}= AuthStateHook
  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Profile' >
          <Stack.Screen name='Profile' component={Profile} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='Home' component={Home} ></Stack.Screen>
          <Stack.Screen name='Profile' component={Profile} ></Stack.Screen>
          <Stack.Screen name='Signup' component={Signup} ></Stack.Screen>
          <Stack.Screen name='Login' component={Login} ></Stack.Screen>
          <Stack.Screen name='TaskScreen' component={TaskScreen} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
}

export default App
const styles = StyleSheet.create({})