import React from 'react';
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
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
        <HomeStack.Navigator screenOptions={headerStyle}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                title: "Overview",
                headerLeft: () => (
                    <Icons.Button name="ios-menu"
                        size={25}
                        backgroundColor="#009387"
                        onPress={() => { navigation.openDrawer() }}>
                    </Icons.Button>
                )
            }} />
            <HomeStack.Screen name="Details" component={DetailScreen} />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;