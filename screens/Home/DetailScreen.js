import React from 'react';
import { Text, View, Button } from 'react-native';

const DetailScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Screen</Text>
            <Button title="Back to Home" onPress={() => navigation.navigate('Home')}>

            </Button>
        </View>
    );
}

export default DetailScreen;