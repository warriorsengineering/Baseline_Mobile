import "./src/styles/global.css";

import React from "react";
import { useEffect, useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { User, onAuthStateChanged } from "firebase/auth";
import { firebase_auth } from "./src/config/firebase";

import { Auth, Home, Components, Roster } from './src/screens/Screens';
import { BottomTab } from './src/components/Components';

type RootStackParamList = {
  BottomTabs: undefined;
  Home: undefined;
  Auth: undefined;
  Components: undefined;
  Roster: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(firebase_auth, (user) => {
      setUser(user);
    });
  }, []);

  return (

    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <React.Fragment>
            <Stack.Screen
              name="BottomTabs"
              component={BottomTab}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Baseline Mobile', headerShown: true }}
            />
            <Stack.Screen
              name="Components"
              component={Components}
              options={{ title: 'Components', headerShown: true }}
            />
            <Stack.Screen
              name="Roster"
              component={Roster}
              options={{ title: 'Roster', headerShown: true }}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{ title: 'Log In / Sign Up', headerShown: false }}
            />
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
