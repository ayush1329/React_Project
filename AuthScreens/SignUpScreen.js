
import React from 'react';
import { Text, View, Button } from 'react-native';
import loginStyle from '../styles/LoginStyle';
import Feather from 'react-native-vector-icons/Feather';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const SignUpScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        isTextChange: false,
        secureTextChange: true,
        confirmSecureTextChange: true
    });

    const onEnterPassword = (val) => {
        setData({
            ...data,
            password: val,
        })
    }

    const onEnterConfirmkPassword = (val) => {
        setData({
            ...data,
            confirmPassword: val,
        })
    }

    const onChangeInput = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                isTextChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                isTextChange: false
            })
        }
    }

    const onShowPass = (type) => {
        if (type === 'pass') {
            setData({
                ...data,
                secureTextChange: !data.secureTextChange
            });
        } else if (type === 'conPass') {
            setData({
                ...data,
                confirmSecureTextChange: !data.confirmSecureTextChange
            });
        }
    }


    return (
        <View style={loginStyle.container}>
            <View style={loginStyle.signInHeader}>
                <Text style={loginStyle.textTitle}> Welcome to Sign Up !</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={loginStyle.signInFooter}>
                <Text>Email</Text>
                <View style={loginStyle.action}>
                    <Feather
                        name="user"
                        color="#05375a"
                        size={20}
                    ></Feather>
                    <TextInput
                        placeholder="Enter Email"
                        style={loginStyle.textInput}
                        onChangeText={(val) => onChangeInput(val)}
                    >
                    </TextInput>
                    {data.isTextChange ? <Feather
                        name="check-circle"
                        color="green"
                        size={20}>

                    </Feather> : null}

                </View>
                <Text style={{ marginTop: 30 }}>Password</Text>
                <View style={loginStyle.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    ></Feather>
                    <TextInput
                        placeholder="Your Password"
                        onChangeText={(val) => onEnterPassword(val)}
                        secureTextEntry={data.secureTextChange}
                        style={loginStyle.textInput}
                    >
                    </TextInput>
                    <TouchableOpacity onPress={() => onShowPass('pass')}>
                        {data.secureTextChange ? <Feather
                            name="eye-off"
                            color="grey"
                            size={20}>

                        </Feather> :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}>

                            </Feather>
                        }

                    </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 30 }}>Confirm Password</Text>
                <View style={loginStyle.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    ></Feather>
                    <TextInput
                        placeholder="Confirm Your Password"
                        onChangeText={(val) => onEnterConfirmkPassword(val)}
                        secureTextEntry={data.confirmSecureTextChange}
                        style={loginStyle.textInput}
                    >
                    </TextInput>
                    <TouchableOpacity onPress={() => onShowPass('conPass')}>
                        {data.confirmSecureTextChange ? <Feather
                            name="eye-off"
                            color="grey"
                            size={20}>

                        </Feather> :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}>

                            </Feather>
                        }

                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={loginStyle.signInBtn}>
                    <Text style={loginStyle.btnText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={loginStyle.signInBtn} onPress={() => { navigation.goBack() }}>
                    <Text style={loginStyle.btnText}>Sign In</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

export default SignUpScreen;