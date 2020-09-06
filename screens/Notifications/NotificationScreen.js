import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';

const NotificationScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.cardsWrapper}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Notification</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Notification</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Notification</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Notification</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Notification</Text>
                </View>
            </View>
        </ScrollView >
    )
}

export default NotificationScreen;

const styles = StyleSheet.create({
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 150,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: '#fff',
        padding: 10
    },
})