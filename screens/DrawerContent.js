import { React } from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


export function CustomDrawerContent({ props }) {

    return (
        <View>
            <Text> This is drawer Content</Text>
        </View>
    );

}