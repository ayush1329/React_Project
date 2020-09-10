
import React from 'react';
import { Text, View, Button } from 'react-native';
import loginStyle from '../styles/LoginStyle';
import Feather from 'react-native-vector-icons/Feather';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';

const SignInScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        isTextChange: false,
        secureTextChange: true
    });

    const onEnterPassword = (val) => {
        setData({
            ...data,
            password: val,
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

    const onShowPass = () => {
        setData({
            ...data,
            secureTextChange: !data.secureTextChange
        });
    }


    return (
        <View style={loginStyle.container}>
            <View style={loginStyle.signInHeader}>
                <Text style={loginStyle.textTitle}> Welcome !</Text>
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
                        onChangeText={(val) => this.props.onChangeInput(val)}
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
                        onChangeText={(val) => this.props.onEnterPassword(val)}
                        secureTextEntry={data.secureTextChange}
                        style={loginStyle.textInput}
                    >
                    </TextInput>
                    <TouchableOpacity onPress={() => onShowPass()}>
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

                <TouchableOpacity style={loginStyle.signInBtn}>
                    <Text style={loginStyle.btnText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={loginStyle.signInBtn} onPress={() => { navigation.navigate('SignUpScreen') }}>
                    <Text style={loginStyle.btnText}>Sign Up</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const mapStatesToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput: (val) => dispatch({ type: 'USER_NAME', payload: val }),
        onEnterPassword: (pass) => dispatch({ type: 'PASS', payload: pass })
    }
}

export default connect(mapStatesToProps, mapDispatchToProps)(SignInScreen);