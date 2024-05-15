import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { colors } from '../utils/styles';

const CustomModal = ({ visible, closeModal, children }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={closeModal}
        >
            <>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {children}
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',


    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
        margin: '3%',
        height: '80%',
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: colors.common
    },
    closeButtonText: {
        color: colors.white,
        fontSize: 16,
        backgroundColor: colors.common,
        width: 100,
        padding: 10,
        textAlign: 'center',
        borderRadius: 15,
    },
});

export default CustomModal;
