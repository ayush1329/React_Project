
import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.cardsWrapper}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Amazing Food Place</Text>
                </View>
            </View>
            <ScrollView horizontal scrollEventThrottle={1} showsHorizontalScrollIndicator={false}
                style={{ paddingHorizontal: 20 }}>
                <View style={styles.horizontlaCard}>
                    <Text style={styles.cardTitle}>Amazing Food Place</Text>
                </View>
                <View style={styles.horizontlaCard}>
                    <Text style={styles.cardTitle}>Delicious Food Place</Text>
                </View>
                <View style={styles.horizontlaCard}>
                    <Text style={styles.cardTitle}>Delicious Food Place</Text>
                </View>
                <View style={styles.horizontlaCard}>
                    <Text style={styles.cardTitle}>Delicious Food Place</Text>
                </View>
                <View style={styles.horizontlaCard}>
                    <Text style={styles.cardTitle}>Delicious Food Place</Text>
                </View>
            </ScrollView>
        </ScrollView >
    );
}

export default HomeScreen;


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

    horizontlaCard: {
        height: 200,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: '#d02860',
        padding: 10,
        marginRight: 20,
        width: '30%'
    },

    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        color: '#fff'
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
})