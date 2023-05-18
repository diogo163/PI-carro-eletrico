import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ChargerScreen from '../screens/ChargerScreen';
import CarScreen from '../screens/CarScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        <Stack.Screen name="Charger" options={{headerShown: false}} component={ChargerScreen} />
        <Stack.Screen name="Car" options={{headerShown: false}} component={CarScreen} />
        <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}