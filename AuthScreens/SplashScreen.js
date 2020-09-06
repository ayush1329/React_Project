
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import loginStyle from '../styles/LoginStyle';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={loginStyle.container}>
            <View style={loginStyle.header}>
                <Animatable.Image
                    animation="bounceIn"
                    source={require('../assets/logo.jpeg')}
                    style={loginStyle.logo}
                    resizeMode="stretch" />
            </View>
            <Animatable.View
                animation='fadeInUpBig'
                style={loginStyle.footer}>
                <Text style={loginStyle.title}>Stay connected with everyone !</Text>
                <Text style={loginStyle.text}> Sign in with account</Text>
                <View style={loginStyle.button}>
                    <TouchableOpacity style={loginStyle.signIn} onPress={() => navigation.navigate('SignInScreen')}>
                        <Text style={loginStyle.textSign}> Get Started </Text>
                        <MaterialIcon
                            name="navigate-next"
                            color='#fff'
                            size={20}
                        ></MaterialIcon>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

export default SplashScreen;