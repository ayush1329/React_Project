import React from 'react';
import HomeScreen from './Home/HomeScreen';
import DetailScreen from './Home/DetailScreen';
import { createStackNavigator } from '@react-navigation/stack';

const LayoutStack = createStackNavigator();

const LayoutScreen = () => {
    return (
        <LayoutStack.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor: '#009387'
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }
        }>
            <LayoutStack.Screen name="Home" component={HomeScreen} />
            {/* <LayoutStack.Screen name="Details" component={DetailScreen} /> */}
        </LayoutStack.Navigator>
    )
}

export default LayoutScreen;