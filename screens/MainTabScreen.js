import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStackScreen from './Home/HomeStack';
import ExploreStackScreen from './Explore/ExploreStack'
import NotificationStackScreen from './Notifications/NotificationStack';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            activeColor="#fff"
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="ExploreStack"
                component={ExploreStackScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarColor: '#d02860',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="equalizer" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="NotificationStack"
                component={NotificationStackScreen}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MainTabScreen;