import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Button from '../../components/Button';

const ComplaintScreen = () => {
  const [issue, setIssue] = useState('');
  const [details, setDetails] = useState('');

  const sendComplaint = () => {
    if (issue.trim() === '' || details.trim() === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      // Send complaint logic here (e.g., API call)
      // You can customize this function according to your backend implementation
      Alert.alert('Success', 'Complaint sent successfully');
      setIssue('');
      setDetails('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Issue:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter issue"
          value={issue}
          onChangeText={text => setIssue(text)}
        />
        <Text style={styles.label}>Details:</Text>
        <TextInput
          style={[styles.input, styles.detailsInput]}
          placeholder="Enter details"
          multiline
          numberOfLines={4}
          value={details}
          onChangeText={text => setDetails(text)}
        />
        <Button text={'Send Complaint'} onPress={sendComplaint}/>
       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#fff',    
    justifyContent  : 'center',

  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  detailsInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ComplaintScreen;
