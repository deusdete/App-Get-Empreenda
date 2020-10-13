import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import LoginScrenn from "../screens/LoginScreen";
import {AuthStackParamList } from '../types'

const Stack = createStackNavigator<AuthStackParamList>();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScrenn} />
      <Stack.Screen name="Registro" component={LoginScrenn} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;