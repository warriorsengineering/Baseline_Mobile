// Bottom Tab Navigation
import * as React from 'react';
import { View, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EventsNavigation, TeamNavigation } from './Components';
import { Arena, Home, Tickets } from '../screens/Screens';

import homeActiveIcon from '../assets/icons/home-active.png';
import homeDefaultIcon from '../assets/icons/home-default.png';
import teamActiveIcon from '../assets/icons/team-active.png';
import teamDefaultIcon from '../assets/icons/team-default.png';
import ticketsActiveIcon from '../assets/icons/tickets-active.png';
import ticketsDefaultIcon from '../assets/icons/tickets-default.png';
import eventsActiveIcon from '../assets/icons/events-active.png';
import eventsDefaultIcon from '../assets/icons/events-default.png';
import arenaActiveIcon from '../assets/icons/arena-active.png';
import arenaDefaultIcon from '../assets/icons/arena-default.png';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View className={`px-10 pt-2.5 ${focused ? 'border-t-2 border-primary' : ''}`}>
              <Image source={focused ? homeActiveIcon : homeDefaultIcon} style={{ width: 22, height: 24 }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Team"
        component={TeamNavigation}
        options={{
          headerShown: true,
          title: 'Team',
          tabBarIcon: ({ focused }) => (
            <View className={`px-10 pt-2.5 ${focused ? 'border-t-2 border-primary' : ''}`}>
              <Image source={focused ? teamActiveIcon : teamDefaultIcon} style={{ width: 24, height: 24 }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Tickets"
        component={Tickets}
        options={{
          headerShown: true,
          title: 'My Tickets',
          tabBarIcon: ({ focused }) => (
            <View className={`px-10 pt-2.5 ${focused ? 'border-t-2 border-primary' : ''}`}>
              <Image source={focused ? ticketsActiveIcon : ticketsDefaultIcon} style={{ width: 32, height: 20 }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsNavigation}
        options={{
          headerShown: true,
          title: 'Events',
          tabBarIcon: ({ focused }) => (
            <View className={`px-10 pt-2.5 ${focused ? 'border-t-2 border-primary' : ''}`}>
              <Image source={focused ? eventsActiveIcon : eventsDefaultIcon} style={{ width: 26, height: 24 }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Arena"
        component={Arena}
        options={{
          headerShown: true,
          title: 'Arena',
          tabBarIcon: ({ focused }) => (
            <View className={`px-10 pt-2.5 ${focused ? 'border-t-2 border-primary' : ''}`}>
              <Image source={focused ? arenaActiveIcon : arenaDefaultIcon} style={{ width: 24, height: 24 }} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;