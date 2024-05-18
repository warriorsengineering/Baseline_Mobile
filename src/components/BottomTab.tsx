// Bottom Tab Navigation

import * as React from 'react';
import { View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBasketball, faCalendarDays, faHome, faTicketSimple, faVial } from '@fortawesome/free-solid-svg-icons';

import { TeamNavigation } from './Components';
import { Components, Home } from '../screens/Screens';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#808080',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          title: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <View className={`px-10 pt-2.5 ${focused ? 'border-t-2 border-primary' : ''}`}>
              <FontAwesomeIcon icon={focused ? faHome : faHome} size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Roster"
        component={TeamNavigation}
        options={{
          headerShown: true,
          title: 'Team',
          tabBarIcon: ({focused, color, size}) => (
            <View className={`px-10 pt-2.5 ${focused ? 'border-t-2 border-primary' : ''}`}>
              <FontAwesomeIcon icon={focused ? faBasketball : faBasketball} size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Tickets"
        component={Components}
        options={{
          headerShown: true,
          title: 'My Tickets',
          tabBarIcon: ({focused, color, size}) => (
            <View className={`px-10 pt-2.5 ${focused ? 'border-t-2 border-primary' : ''}`}>
              <FontAwesomeIcon icon={focused ? faTicketSimple : faTicketSimple} size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Components}
        options={{
          headerShown: true,
          title: 'Events',
          tabBarIcon: ({focused, color, size}) => (
            <View className={`px-10 pt-2.5 ${focused ? 'border-t-2 border-primary' : ''}`}>
              <FontAwesomeIcon icon={focused ? faCalendarDays : faCalendarDays}  size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Components"
        component={Components}
        options={{
          headerShown: true,
          title: 'Components',
          tabBarIcon: ({focused, color, size}) => (
            <View className={`px-10 pt-2.5 ${focused ? 'border-t-2 border-primary' : ''}`}>
              <FontAwesomeIcon icon={focused ? faVial : faVial} size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;