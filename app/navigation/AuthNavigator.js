import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStartedScreen from './../screens/GetStartedScreen';
import LoginScreen from './../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="GetStarted">
      <Stack.Screen name="Login"component={LoginScreen} />
    <Stack.Screen name="GetStarted"component={GetStartedScreen} />

  </Stack.Navigator>
);

export default AuthNavigator;
