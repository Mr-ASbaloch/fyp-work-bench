import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../../utils/styles';

const CongratulationScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.congratsText}>Congratulations!</Text>
            {/* <Image source={require('../../assets/images/gif.png')} style={styles.congratsGif} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    congratsText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    congratsGif: {
        width: 200,
        height: 200,
    },
});

export default CongratulationScreen;
