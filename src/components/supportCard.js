import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../utils/styles';

const HelpAndSupportCard = ({ title, description, source, onPressButton }) => {
    return (
        <View style={styles.card}>
            <Image source={source} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <TouchableOpacity style={styles.button} onPress={onPressButton}>
                    <Text style={styles.buttonText}>Get Help</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 20,
        borderColor:'grey',
        borderWidth: 0.5,

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginBottom: 10,
        alignSelf: 'center',
        tintColor: colors.common,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: colors.blackText,

    },
    description: {
        fontSize: 14,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 50,
        alignItems: 'center',
        borderBlockColor: 'green',
        borderWidth: 1,
        width: '50%',
    },
    buttonText: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default HelpAndSupportCard;