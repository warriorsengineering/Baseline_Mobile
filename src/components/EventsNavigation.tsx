// Events Navigation Component

import React from 'react';
import { Text } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FeaturedEvents, UpcomingEvents } from '../screens/Screens';

const Tab = createMaterialTopTabNavigator();

const EventsNavigation = () => {

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, textTransform: 'none' },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: '#FFFFFF' },
          tabBarIndicatorStyle: { backgroundColor: 'transparent' },
          tabBarScrollEnabled: true,
        }}
      >
        <Tab.Screen
          name="Featured"
          component={FeaturedEvents}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ paddingHorizontal: 5 }} className={`font-${focused ? 'bold' : 'normal'}`}>Featured</Text>
            ),
            tabBarItemStyle: { width: 'auto' },
          }}
        />
        <Tab.Screen
          name="Upcoming"
          component={UpcomingEvents}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ paddingHorizontal: 5 }} className={`font-${focused ? 'bold' : 'normal'}`}>Upcoming</Text>
            ),
            tabBarItemStyle: { width: 'auto' },
          }}
        />

      </Tab.Navigator>
    </>
  );
};

export default EventsNavigation;