import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInHeader: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    signInFooter: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    textTitle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    logo: {
        height: height_logo,
        width: height_logo,
        borderRadius: 100
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        backgroundColor: '#009387',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        marginTop: 10,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        paddingHorizontal: 10,
        flex: 1
    },
    signInBtn: {
        backgroundColor: '#009387',
        width: '100%',
        marginTop: 30,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold'
    }

});

export default loginStyle;