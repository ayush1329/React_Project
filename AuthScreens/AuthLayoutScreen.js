import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const AuthStack = createStackNavigator();

const AuthLayoutScreen = () => {
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="SplasScreen" component={SplashScreen}></AuthStack.Screen>
            <AuthStack.Screen name="SignInScreen" component={SignInScreen}></AuthStack.Screen>
            <AuthStack.Screen name="SignUpScreen" component={SignUpScreen}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}

export default AuthLayoutScreen;