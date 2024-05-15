import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../utils/styles';
import { commonStyle } from './commonStyle';

const UtilitiesAndExpenditures = ({ navigation }) => {
    const [lastMonthUtilities, setLastMonthUtilities] = useState('');
    const [telephone, setTelephone] = useState('');
    const [electricity, setElectricity] = useState('');
    const [gas, setGas] = useState('');
    const [water, setWater] = useState('');
    const [medicalExpenditure, setMedicalExpenditure] = useState('');
    const [totalEducationExpenditure, setTotalEducationExpenditure] = useState('');
    const [totalAccommodationExpenditure, setTotalAccommodationExpenditure] = useState('');
    const [totalUtilitiesExpenditure, setTotalUtilitiesExpenditure] = useState('');
    const [totalMedicalExpenditure, setTotalMedicalExpenditure] = useState('');
    const [totalMiscExpenditure, setTotalMiscExpenditure] = useState('');
    const [totalMonthlyExpenditure, setTotalMonthlyExpenditure] = useState('');
    const [totalAnnualExpenditure, setTotalAnnualExpenditure] = useState('');
    const [netMonthlyDisposableIncome, setNetMonthlyDisposableIncome] = useState('');
    const [netAnnualDisposableIncome, setNetAnnualDisposableIncome] = useState('');
    const [ownsTransport, setOwnsTransport] = useState('');
    const [transportDetails, setTransportDetails] = useState([
        { transportType: '', makeModel: '', engineCapacity: '', registrationNo: '', ownershipPeriod: '' }
    ]);
    const [numberOfCattle, setNumberOfCattle] = useState('');
    const [landDetails, setLandDetails] = useState('');
    const [assets, setAssets] = useState([
        { title: '', father: '', mother: '', spouse: '', self: '', guardian: '', total: '' }
    ]);
    const [loanForEducation, setLoanForEducation] = useState('');
    const [sourceOfFinancing, setSourceOfFinancing] = useState('');
    const [paymentOfAdmissionCharges, setPaymentOfAdmissionCharges] = useState('');
    const [educationalRecord, setEducationalRecord] = useState('');

    const handleAddTransport = () => {
        setTransportDetails([...transportDetails, { transportType: '', makeModel: '', engineCapacity: '', registrationNo: '', ownershipPeriod: '' }]);
    };

    const handleAddAsset = () => {
        setAssets([...assets, { title: '', father: '', mother: '', spouse: '', self: '', guardian: '', total: '' }]);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ color: colors.common, fontSize: 20, fontWeight: '600', marginBottom: 15 }}>Utilities Expenditures</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Last Month Utilities Paid</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter utilities paid"
                        value={lastMonthUtilities}
                        onChangeText={(text) => setLastMonthUtilities(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Telephone Expenditure</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter telephone expenditure"
                        value={telephone}
                        onChangeText={(text) => setTelephone(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Electricity Expenditure</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter electricity expenditure"
                        value={electricity}
                        onChangeText={(text) => setElectricity(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Gas Expenditure</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter gas expenditure"
                        value={gas}
                        onChangeText={(text) => setGas(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Water Expenditure</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter water expenditure"
                        value={water}
                        onChangeText={(text) => setWater(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Medical Expenditures (Average of last six months)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter medical expenditures"
                        value={medicalExpenditure}
                        onChangeText={(text) => setMedicalExpenditure(text)}
                    />
                </View>
                <Text style={styles.sectionHeader}>Total Family Expenditures</Text>
                {/* Add input fields for total education, accommodation, utilities, medical, and misc. expenditures */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Assets (with current market value)</Text>
                    {/* Add input fields for assets */}
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Loan taken for Applicant Education</Text>
                    <TextInput
                        style={styles.input}
                        multiline
                        numberOfLines={5}
                        placeholder="Enter details of loan taken"
                        value={loanForEducation}
                        onChangeText={(text) => setLoanForEducation(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Any source of financing other than loan</Text>
                    <TextInput
                        style={styles.input}
                        multiline
                        numberOfLines={5}
                        placeholder="Enter other sources of financing"
                        value={sourceOfFinancing}
                        onChangeText={(text) => setSourceOfFinancing(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>How were the admission/first semester charges paid?</Text>
                    <TextInput
                        style={styles.input}
                        multiline
                        numberOfLines={5}
                        placeholder="Enter how the charges were paid"
                        value={paymentOfAdmissionCharges}
                        onChangeText={(text) => setPaymentOfAdmissionCharges(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Applicant's educational record</Text>
                    <TextInput
                        style={styles.input}
                        multiline
                        numberOfLines={5}
                        placeholder="Enter educational record"
                        value={educationalRecord}
                        onChangeText={(text) => setEducationalRecord(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Does the family own any Transport?</Text>
                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity onPress={() => setOwnsTransport('Yes')} style={styles.checkbox}>
                            <View style={ownsTransport === 'Yes' ? styles.checked : styles.unchecked} />
                            <Text style={styles.checkboxText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setOwnsTransport('No')} style={styles.checkbox}>
                            <View style={ownsTransport === 'No' ? styles.checked : styles.unchecked} />
                            <Text style={styles.checkboxText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {ownsTransport === 'Yes' && (
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Transport Details</Text>
                        {transportDetails.map((detail, index) => (
                            <View key={index} style={styles.transportInputContainer}>
                                <Text style={styles.transportLabel}>S # {index + 1}</Text>
                                <TextInput
                                    style={styles.transportInput}
                                    placeholder="Transport Type"
                                    value={detail.transportType}
                                    onChangeText={(text) => handleTransportDetailsChange(index, 'transportType', text)}
                                />
                                <TextInput
                                    style={styles.transportInput}
                                    placeholder="Make/Model"
                                    value={detail.makeModel}
                                    onChangeText={(text) => handleTransportDetailsChange(index, 'makeModel', text)}
                                />
                                <TextInput
                                    style={styles.transportInput}
                                    placeholder="Engine Capacity (CC)"
                                    value={detail.engineCapacity}
                                    onChangeText={(text) => handleTransportDetailsChange(index, 'engineCapacity', text)}
                                />
                                <TextInput
                                    style={styles.transportInput}
                                    placeholder="Registration No."
                                    value={detail.registrationNo}
                                    onChangeText={(text) => handleTransportDetailsChange(index, 'registrationNo', text)}
                                />
                                <TextInput
                                    style={styles.transportInput}
                                    placeholder="Ownership Period"
                                    value={detail.ownershipPeriod}
                                    onChangeText={(text) => handleTransportDetailsChange(index, 'ownershipPeriod', text)}
                                />
                            </View>
                        ))}
                        <TouchableOpacity onPress={handleAddTransport} style={styles.addTransportButton}>
                            <Text style={styles.addTransportButtonText}>Add Transport</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <View style={commonStyle.buttonContainer}>
                    <TouchableOpacity style={commonStyle.button} >
                        <Text style={commonStyle.buttonText} > submit  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={commonStyle.button} onPress={() => {
                        navigation.navigate('congratsScreen');
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
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
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
    transportInputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    transportLabel: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    transportInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    addTransportButton: {
        width: '100%',
        backgroundColor: colors.bgPrimary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    addTransportButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default UtilitiesAndExpenditures;
