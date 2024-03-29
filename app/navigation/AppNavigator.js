import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './../screens/HomeScreen';
import ActivityScreen from './../screens/ActivityScreen';
import TeamsScreen from './../screens/TeamsScreen';
import ChatsScreen from '../screens/ChatsScreen';
import DrawerScreen from '../screens/DrawerScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from './../config/colors';

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const TabsNavigator = ({navigation}) => (
  <Tab.Navigator
    screenOptions={{
      // headerShown: false,

      headerLeft: () => (
        <MaterialCommunityIcons
          name="menu"
          size={25}
          style={{marginLeft: 20}}
          color={colors.primary}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      ),
      tabBarActiveTintColor: colors.tabBackground,
      tabBarActiveBackgroundColor: colors.white,
      tabBarInactiveBackgroundColor: colors.tabBackground,
      tabBarInactiveTintColor: colors.grayIcon,
      tabBarStyle: {
        height: 75,
        paddingHorizontal: 20,
        backgroundColor: colors.tabBackground,
      },
      tabBarItemStyle: {
        padding: 10,
        borderBottomRightRadius: 30,
      },
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Activity"
      component={ActivityScreen}
      options={{
        tabBarLabel: 'Activity',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Teams"
      component={TeamsScreen}
      options={{
        tabBarLabel: 'Teams',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="account-group"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Chats"
      component={ChatsScreen}
      options={{
        tabBarLabel: 'Chats',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="message-reply-text"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="App"
      screenOptions={{headerShown: false}}
      drawerContent={() => {
        return <DrawerScreen />;
      }}>
      <Drawer.Screen name="App" component={TabsNavigator} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
