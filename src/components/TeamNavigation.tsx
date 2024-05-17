import React, { useRef, useEffect } from 'react';
import { Text, View } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Roster, Schedule, Shop, Standings, Stats } from '../screens/Screens';

const Tab = createMaterialTopTabNavigator();

const TeamNavigation = () => {

  return (
  <>
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: {fontSize: 12, textTransform: 'none'},
      tabBarItemStyle: {width: 90},
      tabBarStyle: {backgroundColor: '#fff'},
      tabBarIndicatorStyle: {backgroundColor: 'transparent'},
      tabBarScrollEnabled: true,
    }}
  >
    <Tab.Screen
      name="Schedule"
      component={Schedule}
      options={{
        tabBarLabel: ({focused}) => (
          <Text className={`font-${focused ? 'bold' : 'normal'}`}>Schedule</Text>
        ),
      }}
    />
    <Tab.Screen
      name="Roster"
      component={Roster}
      options={{
        tabBarLabel: ({focused}) => (
          <Text className={`font-${focused ? 'bold' : 'normal'}`}>Roster</Text>
        ),
      }}
    />
    <Tab.Screen
      name="Stats"
      component={Stats}
      options={{
        tabBarLabel: ({focused}) => (
          <Text className={`font-${focused ? 'bold' : 'normal'}`}>Stats</Text>
        ),
      }}
    />
    <Tab.Screen
      name="Standings"
      component={Standings}
      options={{
        tabBarLabel: ({focused}) => (
          <Text className={`font-${focused ? 'bold' : 'normal'}`}>Standings</Text>
        ),
      }}
    />
    <Tab.Screen
      name="Shop"
      component={Shop}
      options={{
        tabBarLabel: ({focused}) => (
          <Text className={`font-${focused ? 'bold' : 'normal'}`}>Shop</Text>
        ),
      }}
    />
  </Tab.Navigator>
  </>
  );
};

export default TeamNavigation;