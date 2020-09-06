import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from './NotificationScreen';
import Icons from 'react-native-vector-icons/Ionicons';

const NotificationStack = createStackNavigator();

const NotificationStackScreen = ({ navigation }) => {
    const headerStyle = {
        headerStyle: {
            backgroundColor: '#009387'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    }

    return (
        <NotificationStack.Navigator screenOptions={headerStyle}>
            <NotificationStack.Screen name="Notification" component={NotificationScreen} options={{
                title: "Notification View",
                headerLeft: () => (
                    <Icons.Button name="ios-menu"
                        size={25}
                        backgroundColor="#009387"
                        onPress={() => { navigation.openDrawer() }}>
                    </Icons.Button>
                )
            }}></NotificationStack.Screen>
        </NotificationStack.Navigator>
    )

}

export default NotificationStackScreen;
