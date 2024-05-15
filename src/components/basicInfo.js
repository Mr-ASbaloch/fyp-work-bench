// BasicInfoButton.js

import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { colors } from '../utils/styles';
// import { colors } from '../../utils/styles';

const BasicInfoButton = ({ onPress, source, buttonText, arrow }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>

            <Image style={styles.editButton} source={source} />

            <Text style={styles.buttonText}>{buttonText}</Text>
            <Image source={require("../assets/icons/right.png")} style={styles.arrow} />

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginVertical: 20,
        backgroundColor: 'white',
        padding: 5,
        marginTop: 30,
        width: '100%'
    },
    button: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
        // borderTopEndRadius:50,
        // borderBottomEndRadius:50,
    },
    buttonText: {
        color: colors.common,
        fontWeight: '500',
        textAlign:"left"
    },
   
    editButton: {
        borderRadius: 5,
        //position: 'absolute',
        // top: 10,
        //right: 50,
        height: 30,
        width: 30,
        marginRight: 15,
        alignSelf: 'center',
        // tintColor: colors.common 

    },
    arrow: {
        height: 20,
        width: 20,
        alignSelf: 'center',
        // tintColor: colors.common
    },
});

export default BasicInfoButton;
