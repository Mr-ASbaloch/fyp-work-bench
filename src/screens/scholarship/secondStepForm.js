import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../utils/styles';
import { commonStyle } from './commonStyle';

const FormComponent = ({navigation}) => {
  const [fatherName, setFatherName] = useState('');
  const [nicNo, setNicNo] = useState('');
  const [status, setStatus] = useState('');
  const [professionalStatus, setProfessionalStatus] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [telOff, setTelOff] = useState('');
  const [mobile, setMobile] = useState('');
  const [occupationType, setOccupationType] = useState('');
  const [ntn, setNtn] = useState('');
  const [designation, setDesignation] = useState('');
  const [grossIncome, setGrossIncome] = useState('');
  const [netMonthlyIncome, setNetMonthlyIncome] = useState('');
  const [supportingPersonName, setSupportingPersonName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [supportingPersonOccupation, setSupportingPersonOccupation] = useState('');
  const [monthlyFinancialSupport, setMonthlyFinancialSupport] = useState('');
  const [assetIncome, setAssetIncome] = useState('');

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const handleProfessionalStatusChange = (value) => {
    setProfessionalStatus(value);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ color: colors.common, fontSize: 20, fontWeight: '600', marginBottom: 15 }}>Family Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Father’s Name"
          value={fatherName}
          onChangeText={(text) => setFatherName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Computerized N.I.C. No"
          value={nicNo}
          onChangeText={(text) => setNicNo(text)}
        />
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => handleStatusChange('Alive')} style={styles.checkbox}>
            <View style={status === 'Alive' ? styles.checked : styles.unchecked} />
            <Text style={styles.checkboxText}>Alive</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleStatusChange('Deceased')} style={styles.checkbox}>
            <View style={status === 'Deceased' ? styles.checked : styles.unchecked} />
            <Text style={styles.checkboxText}>Deceased</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => handleProfessionalStatusChange('Employed')} style={styles.checkbox}>
            <View style={professionalStatus === 'Employed' ? styles.checked : styles.unchecked} />
            <Text style={styles.checkboxText}>Employed</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProfessionalStatusChange('Retired')} style={styles.checkbox}>
            <View style={professionalStatus === 'Retired' ? styles.checked : styles.unchecked} />
            <Text style={styles.checkboxText}>Retired</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProfessionalStatusChange('Business Owner')} style={styles.checkbox}>
            <View style={professionalStatus === 'Business Owner' ? styles.checked : styles.unchecked} />
            <Text style={styles.checkboxText}>Business Owner</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Name of Company/Employer"
          value={companyName}
          onChangeText={(text) => setCompanyName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Tel (Off)"
          value={telOff}
          onChangeText={(text) => setTelOff(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile"
          value={mobile}
          onChangeText={(text) => setMobile(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Occupation Type"
          value={occupationType}
          onChangeText={(text) => setOccupationType(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="NTN"
          value={ntn}
          onChangeText={(text) => setNtn(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Designation & Grade (BPS/SPS/PTC etc)"
          value={designation}
          onChangeText={(text) => setDesignation(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Gross Monthly Income"
          value={grossIncome}
          onChangeText={(text) => setGrossIncome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Total Net Monthly Take Home Income"
          value={netMonthlyIncome}
          onChangeText={(text) => setNetMonthlyIncome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Any Other Supporting Person (Mother/ Guardian/ Brother/ Sister/Family Relative/Guardian) Name"
          value={supportingPersonName}
          onChangeText={(text) => setSupportingPersonName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Relationship"
          value={relationship}
          onChangeText={(text) => setRelationship(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Occupation and Designation"
          value={supportingPersonOccupation}
          onChangeText={(text) => setSupportingPersonOccupation(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Monthly Financial Support Available to Applicant in Pak Rs."
          value={monthlyFinancialSupport}
          onChangeText={(text) => setMonthlyFinancialSupport(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Asset Income (on monthly basis)"
          value={assetIncome}
          onChangeText={(text) => setAssetIncome(text)}
        />
      </View>
      <View style={commonStyle.buttonContainer}>
        <TouchableOpacity style={commonStyle.button} >
          <Text style={commonStyle.buttonText} > back  </Text>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyle.button} onPress={()=>{
        navigation.navigate('thirdForm');
        }} >
          <Text style={commonStyle.buttonText}> Next   </Text>
        </TouchableOpacity>
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
    // display: 'flex',	
    // justifyContent:'flex-start',
    textAlign: 'left',
    width: '100%',
  },
  input: {
    width: '100%',
    // height: 40,
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
    height: 10,
    width: 10,
    backgroundColor: 'blue',
    borderRadius: 2,
    marginRight: 5,
  },
  unchecked: {
    height: 10,
    width: 10,
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

export default FormComponent;
