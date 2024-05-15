import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import { colors } from '../../utils/styles';

const PersonalData = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otherMobileNumber, setOtherMobileNumber] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [tehsilAddress, setTehsilAddress] = useState('');

  const handleSubmit = () => {
    // Check if any required field is empty
    if (!fullName || !email || !mobileNumber || !homeAddress || !city || !province || !postalCode || !tehsilAddress) {
      Alert.alert('Error', 'Please fill out all required fields');
      return;
    }

    // Perform further validation if needed

    // If all validation passes, submit the form
    console.log({
      fullName,
      fatherName,
      birthdate,
      email,
      mobileNumber,
      otherMobileNumber,
      homeAddress,
      streetAddress,
      city,
      province,
      postalCode,
      tehsilAddress,
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10 }} >
      <View style={styles.container}>
        <Text style={{ color: colors.common, fontSize: 20, fontWeight: '600', marginBottom: 15 }} >Personal Information</Text>
        <Text style={styles.label}>Full Name <Text style={{ color: 'red' }}>*</Text> </Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />


        <Text style={styles.label}>Father's Name <Text style={{ color: 'red' }}>*</Text> </Text>
        <TextInput
          style={styles.input}
          value={fatherName}
          onChangeText={setFatherName}
        />

        <Text style={styles.label}>Date of Birth<Text style={{ color: 'red' }}>*</Text> </Text>
        <TextInput
          style={styles.input}
          value={birthdate}
          onChangeText={setBirthdate}
          placeholder="YYYY-MM-DD"
        />
        <Text style={styles.label}>Email<Text style={{ color: 'red' }}>*</Text> </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Mobile Number <Text style={{ color: 'red' }}>*</Text> </Text>
        <TextInput
          style={styles.input}
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Other Mobile Number <Text style={{ color: 'red' }}>*</Text> </Text>
        <TextInput
          style={styles.input}
          value={otherMobileNumber}
          onChangeText={setOtherMobileNumber}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}> Home Adress<Text style={{ color: 'red' }}>*</Text> </Text>
        <TextInput
          style={styles.input}
          value={homeAddress}
          onChangeText={setHomeAddress}
        />
        <Text style={styles.label}>Street Address <Text style={{ color: 'red' }}>*</Text> </Text>
        <TextInput
          style={styles.input}
          value={streetAddress}
          onChangeText={setStreetAddress}
        />
        <Text style={styles.label}>City <Text style={{ color: 'red' }}>*</Text> </Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
        />

        <Text style={styles.label}>Province <Text style={{ color: 'red' }}>*</Text> </Text>
        <TextInput
          style={styles.input}
          value={province}
          onChangeText={setProvince}
        />

        <Text style={styles.label}>Postal Code<Text style={{ color: 'red' }}>*</Text> </Text>
        <TextInput
          style={styles.input}
          value={postalCode}
          onChangeText={setPostalCode}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Tehsil Adress <Text style={{ color: 'red' }}>*</Text> </Text>
        <TextInput
          style={styles.input}
          value={tehsilAddress}
          onChangeText={setTehsilAddress}
        />


       
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText} > submit  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate('secondForm');
          }} >
            <Text style={styles.buttonText}> Next   </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
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
  buttonContainer :{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  }
  ,
  button: {
    width: '30%',
    backgroundColor: colors.bgPrimary,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign:'center'
  },

});

export default PersonalData;
