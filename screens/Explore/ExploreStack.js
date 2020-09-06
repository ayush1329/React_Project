import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from './ExploreScreen';
import Icons from 'react-native-vector-icons/Ionicons';

const ExploreStack = createStackNavigator();

const ExploreStackScreen = ({ navigation }) => {
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
        <ExploreStack.Navigator screenOptions={headerStyle}>
            <ExploreStack.Screen name="Explore" component={ExploreScreen} options={{
                title: "Explore View",
                headerLeft: () => (
                    <Icons.Button name="ios-menu"
                        size={25}
                        backgroundColor="#009387"
                        onPress={() => { navigation.openDrawer() }}>
                    </Icons.Button>
                )
            }}></ExploreStack.Screen>
        </ExploreStack.Navigator>
    )

}

export default ExploreStackScreen;
