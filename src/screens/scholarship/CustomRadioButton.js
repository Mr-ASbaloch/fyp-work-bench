import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

const CustomRadioButton = ({ label, selected, onPress }) => {
    return (
        <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
            <FontAwesome
                name={selected ? 'dot-circle-o' : 'circle-o'}
                size={24}
                color="#444"
                style={styles.radioButtonIcon}
            />
            <Text style={styles.radioButtonLabel}>{label}</Text>
        </TouchableOpacity>
    );
};
export default CustomRadioButton;
const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioButtonIcon: {
        marginRight: 10,
    },
    radioButtonLabel: {
        fontSize: 16,
        color: '#444',
    },
});


