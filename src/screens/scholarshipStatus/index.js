import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../utils/styles';
import NavigationArrow from '../../components/NavigationArrow';
import Button from '../../components/Button';

const CheckStatus = ({ navigation }) => {
  const [cnic, setCnic] = useState('');
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [department, setDepartment] = useState('');
  const [session, setSession] = useState('');
  const [rollNo, setRollNo] = useState('');

  const handleCheckStatus = () => {
    // Here you would perform the logic to check the status based on the provided data
    // For demonstration purposes, let's assume the status is 'pending'
    const status = 'pending';

    // Redirect to the next screen with the status
    navigation.navigate('StatusResult', { status });
  };

  return (
    <View style={styles.container}>
      {/* <NavigationArrow/> */}
      <Text style={styles.heading}>CheckStatus Of Scholarship</Text>
      <Text style={styles.label}>CNIC</Text>
      <TextInput
        style={styles.input}
        value={cnic}
        onChangeText={setCnic}
        placeholder="Enter CNIC"
      />

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter Name"
      />

      <Text style={styles.label}>Registration No.</Text>
      <TextInput
        style={styles.input}
        value={regNo}
        onChangeText={setRegNo}
        placeholder="Enter Registration No."
      />

      <Text style={styles.label}>Department</Text>
      <TextInput
        style={styles.input}
        value={department}
        onChangeText={setDepartment}
        placeholder="Enter Department"
      />

      <Text style={styles.label}>Session</Text>
      <TextInput
        style={styles.input}
        value={session}
        onChangeText={setSession}
        placeholder="Enter Session"
      />

      <Text style={styles.label}>Roll No.</Text>
      <TextInput
        style={styles.input}
        value={rollNo}
        onChangeText={setRollNo}
        placeholder="Enter Roll No."
      />
     <Button text="Check Status" onPress={handleCheckStatus} />
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    paddingHorizontal:20,
    backgroundColor: colors.white,

  },
  heading:{
     fontSize:18,
     textAlign:'center' ,
     fontWeight:'500',
     color:colors.common,
     marginBottom:20,
     marginTop:20

  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CheckStatus;
