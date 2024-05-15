import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import NavigationArrow from '../../components/NavigationArrow';

const NoComplaintFoundScreen = () => {
    return (
        <>

            <View style={styles.container}>
                {/* <NavigationArrow/> */}
                <Image
                    source={require('../../assets/images/complaint.png')} // Add your image path here
                    style={styles.image}
                />
                <Text style={styles.message}>No complaints found</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    message: {
        fontSize: 20,
        color: '#888',
    },
});

export default NoComplaintFoundScreen;