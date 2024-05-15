import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../utils/styles';
import { commonStyle } from './commonStyle';

const ScholarshipDetails = ({navigation}) => {
    const [tuitionCharges, setTuitionCharges] = useState('');
    const [gotScholarships, setGotScholarships] = useState('');
    const [scholarships, setScholarships] = useState([
        { instituteName: '', scholarshipName: '', totalAmount: '', period: '', classLevel: '' }
    ]);
    const [sop, setSop] = useState('');

    const handleAddScholarship = () => {
        setScholarships([...scholarships, { instituteName: '', scholarshipName: '', totalAmount: '', period: '', classLevel: '' }]);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ color: colors.common, fontSize: 20, fontWeight: '600', marginBottom: 15 }}>Scholarship Details</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Per Month Fee/Tuition Charges of the Last Attended Institution</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter fee/tuition charges"
                        value={tuitionCharges}
                        onChangeText={(text) => setTuitionCharges(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Have you ever got any other Scholarships?</Text>
                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity onPress={() => setGotScholarships('Yes')} style={styles.checkbox}>
                            <View style={gotScholarships === 'Yes' ? styles.checked : styles.unchecked} />
                            <Text style={styles.checkboxText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setGotScholarships('No')} style={styles.checkbox}>
                            <View style={gotScholarships === 'No' ? styles.checked : styles.unchecked} />
                            <Text style={styles.checkboxText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {gotScholarships === 'Yes' && (
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Scholarship Details</Text>
                        {scholarships.map((scholarship, index) => (
                            <View key={index} style={styles.scholarshipContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={`Name of Institute (${index + 1})`}
                                    value={scholarship.instituteName}
                                    onChangeText={(text) => handleScholarshipChange(index, 'instituteName', text)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder={`Scholarship Name (${index + 1})`}
                                    value={scholarship.scholarshipName}
                                    onChangeText={(text) => handleScholarshipChange(index, 'scholarshipName', text)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder={`Total Scholarship Amount (${index + 1})`}
                                    value={scholarship.totalAmount}
                                    onChangeText={(text) => handleScholarshipChange(index, 'totalAmount', text)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder={`Scholarship Period (${index + 1})`}
                                    value={scholarship.period}
                                    onChangeText={(text) => handleScholarshipChange(index, 'period', text)}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder={`Class/Level (${index + 1})`}
                                    value={scholarship.classLevel}
                                    onChangeText={(text) => handleScholarshipChange(index, 'classLevel', text)}
                                />
                            </View>
                        ))}
                        <TouchableOpacity onPress={handleAddScholarship} style={styles.addButton}>
                            <Text style={styles.addButtonText}>Add Scholarship</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Statement of Purpose</Text>
                    <TextInput
                        style={styles.input}
                        multiline
                        numberOfLines={5}
                        placeholder="Explain your suitability for this scholarship"
                        value={sop}
                        onChangeText={(text) => setSop(text)}
                    />
                </View>
                <View style={commonStyle.buttonContainer}>
                    <TouchableOpacity style={commonStyle.button} >
                        <Text style={commonStyle.buttonText}>back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={commonStyle.button} onPress={()=>{
                        navigation.navigate('fifthForm')
                    }} >
                        <Text style={commonStyle.buttonText}>Next</Text>
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
    scholarshipContainer: {
        marginBottom: 10,
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
});

export default ScholarshipDetails;
