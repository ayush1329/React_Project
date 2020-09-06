import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthLayoutScreen from './AuthScreens/AuthLayoutScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import { CustomDrawerContent } from './screens/DrawerContent'
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthLayoutScreen /> */}
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
