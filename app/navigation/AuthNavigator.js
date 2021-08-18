import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GetStartedScreen from './../screens/GetStartedScreen';
import LoginScreen from './../screens/LoginScreen';
import ForgotPasswordScreen from './../screens/ForgotPasswordScreen';
import HomeScreen from './../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="GetStarted">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="GetStarted" component={GetStartedScreen} />
    <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
