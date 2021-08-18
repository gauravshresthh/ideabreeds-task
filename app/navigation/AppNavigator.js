import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BankScreen from './../screens/BankScreen';
import ClaimsScreen from './../screens/ClaimsScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';
import colors from './../config/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      activeBackgroundColor: 'white',
      activeTintColor: colors.secondary,
      inactiveBackgroundColor: 'white',
      inactiveTintColor: colors.grayIcon,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Claims"
      component={ClaimsScreen}
      options={{
        tabBarLabel: 'Claims',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="cards" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Bank"
      component={BankScreen}
      options={{
        tabBarLabel: 'Bank',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="bank" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="human-greeting"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
