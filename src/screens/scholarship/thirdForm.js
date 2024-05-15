import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../utils/styles';
import { commonStyle } from './commonStyle';

const FamilyExpenditures = ({navigation}) => {
    const [accType, setAccType] = useState('');
    const [accStatus, setAccStatus] = useState('');
    const [rentPayment, setRentPayment] = useState('');
    const [plotSize, setPlotSize] = useState('');
    const [coveredArea, setCoveredArea] = useState('');
    const [accDetails, setAccDetails] = useState([
        { location: '', bedrooms: '', airConditioners: '', monthlyRent: '' }
    ]);
    const [otherHouse, setOtherHouse] = useState('');

    const handleAccTypeChange = (value) => {
        setAccType(value);
    };

    const handleAccStatusChange = (value) => {
        setAccStatus(value);
    };

    const handleRentPaymentChange = (value) => {
        setRentPayment(value);
    };

    const handleAccDetailsChange = (index, field, value) => {
        const newDetails = [...accDetails];
        newDetails[index][field] = value;
        setAccDetails(newDetails);
    };

    const handleAddAccommodation = () => {
        setAccDetails([...accDetails, { location: '', bedrooms: '', airConditioners: '', monthlyRent: '' }]);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ color: colors.common, fontSize: 20, fontWeight: '600', marginBottom: 15 }}>Family Expenditures</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Accommodation Expenditures</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Type: Bungalow, Apartment, Flat, Town House, Village House"
                        value={accType}
                        onChangeText={(text) => handleAccTypeChange(text)}
                    />
                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity onPress={() => setAccStatus('Rented')} style={styles.checkbox}>
                            <View style={accStatus === 'Rented' ? styles.checked : styles.unchecked} />
                            <Text style={styles.checkboxText}>Rented</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAccStatus('Self/Family owned')} style={styles.checkbox}>
                            <View style={accStatus === 'Self/Family owned' ? styles.checked : styles.unchecked} />
                            <Text style={styles.checkboxText}>Self/Family owned</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setAccStatus('Employer/Govt Owned')} style={styles.checkbox}>
                            <View style={accStatus === 'Employer/Govt Owned' ? styles.checked : styles.unchecked} />
                            <Text style={styles.checkboxText}>Employer/Govt Owned</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity onPress={() => setRentPayment('Self')} style={styles.checkbox}>
                            <View style={rentPayment === 'Self' ? styles.checked : styles.unchecked} />
                            <Text style={styles.checkboxText}>Self</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setRentPayment('Employer/Govt')} style={styles.checkbox}>
                            <View style={rentPayment === 'Employer/Govt' ? styles.checked : styles.unchecked} />
                            <Text style={styles.checkboxText}>Employer/Govt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setRentPayment('Others')} style={styles.checkbox}>
                            <View style={rentPayment === 'Others' ? styles.checked : styles.unchecked} />
                            <Text style={styles.checkboxText}>Others</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={[styles.input, { width: '50%', marginRight: 10 }]}
                            placeholder="Plot Size (Sq. ft.)"
                            value={plotSize}
                            onChangeText={(text) => setPlotSize(text)}
                        />
                        <TextInput
                            style={[styles.input, { width: '50%' }]}
                            placeholder="Covered Area (Sq. ft.)"
                            value={coveredArea}
                            onChangeText={(text) => setCoveredArea(text)}
                        />
                    </View>
                </View>
                <Text style={styles.label}>Accommodation Details</Text>
                {accDetails.map((detail, index) => (
                    <View key={index} style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder={`Location (${index + 1})`}
                            value={detail.location}
                            onChangeText={(text) => handleAccDetailsChange(index, 'location', text)}
                        />
                        {/* Add similar TextInput components for other fields */}
                    </View>
                ))}
                <TouchableOpacity onPress={handleAddAccommodation} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Accommodation</Text>
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Other House/Flat Owned</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Specify with location and size"
                        value={otherHouse}
                        onChangeText={(text) => setOtherHouse(text)}
                    />
                </View>
                <View style={commonStyle.buttonContainer}>
                    <TouchableOpacity style={commonStyle.button} >
                        <Text style={commonStyle.buttonText} > back  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={commonStyle.button} onPress={()=>{
                        navigation.navigate('fourthForm')
                    }} >
                        <Text style={commonStyle.buttonText}> Next   </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    addButton: {
        width: '100%',
        backgroundColor: colors.bgPrimary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    checked: {
        height: 20,
        width: 20,
        backgroundColor: 'blue',
        borderRadius: 2,
        marginRight: 5,
    },
    unchecked: {
        height: 20,
        width: 20,
        backgroundColor: 'transparent',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 2,
        marginRight: 5,
    },
    checkboxText: {
        fontSize: 16,
    },
});

export default FamilyExpenditures;
