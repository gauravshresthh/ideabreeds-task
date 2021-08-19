import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GetStartedScreen from './../screens/GetStartedScreen';
import LoginScreen from './../screens/LoginScreen';
import ForgotPasswordScreen from './../screens/ForgotPasswordScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="GetStarted">
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        animationEnabled: false,
      }}
    />
    <AuthStack.Screen
      name="GetStarted"
      component={GetStartedScreen}
      options={{
        animationEnabled: false,
      }}
    />
    <AuthStack.Screen
      name="Forgot"
      component={ForgotPasswordScreen}
      options={{
        animationEnabled: false,
      }}
    />
  </AuthStack.Navigator>
);

export default AuthNavigator;
