import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import CustomRadioButton from './CustomRadioButton'; // Adjust the import path as needed
import { FontAwesome } from 'react-native-vector-icons';

const ScholarshipSearch = () => {
  // State variables
  const [department, setDepartment] = useState('');
  const [degreeLevel, setDegreeLevel] = useState('');
  const [gpa, setGpa] = useState('');
  const [country, setCountry] = useState('');

  // Sample data for radio buttons
  const departments = ['Engineering', 'Business', 'Arts', 'Science'];
  const degreeLevels = ['Undergraduate', 'Masters', 'PhD'];
  const countries = ['United States', 'Canada', 'United Kingdom', 'Australia'];

  const handleSearch = () => {
    if (department && degreeLevel && gpa && country) {
      // Implement search logic here
      Alert.alert('Search Initiated', `Searching for ${degreeLevel} scholarships in ${department} for GPA ${gpa} in ${country}`);
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Department</Text>
      {departments.map((dept) => (
        <CustomRadioButton
          key={dept}
          label={dept}
          selected={department === dept}
          onPress={() => setDepartment(dept)}
        />
      ))}

      <Text style={styles.label}>Degree Level</Text>
      {degreeLevels.map((level) => (
        <CustomRadioButton
          key={level}
          label={level}
          selected={degreeLevel === level}
          onPress={() => setDegreeLevel(level)}
        />
      ))}

      <Text style={styles.label}>GPA</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        placeholder="Enter GPA"
        value={gpa}
        onChangeText={(text) => setGpa(text)}
      />

      <Text style={styles.label}>Country of Study</Text>
      {countries.map((countryOption) => (
        <TouchableOpacity
          key={countryOption}
          style={styles.checkboxContainer}
          onPress={() => setCountry(countryOption)}
        >
          <FontAwesome
            name={country === countryOption ? 'check-square' : 'square-o'}
            size={24}
            color="#444"
          />
          <Text style={styles.checkboxLabel}>{countryOption}</Text>
        </TouchableOpacity>
      ))}

      <Button title="Search" onPress={handleSearch} />
    </ScrollView>
  );
};

// Styling for the component
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#444',
  },
});

export default ScholarshipSearch;
