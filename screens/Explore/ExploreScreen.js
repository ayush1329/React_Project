import React from 'react';
import { Text, View, Button } from 'react-native';

const ExploreScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Explore View</Text>
            <Button title="Go To Home" onPress={() => { navigation.goBack() }}></Button>
        </View>
    )
}

export default ExploreScreen;