// SearchScholarship.js

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const SearchScholarship = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [location, setLocation] = useState('');
  const [scholarshipType, setScholarshipType] = useState('');

  const handleSearch = () => {
    const filters = {
      keyword,
      educationLevel,
      fieldOfStudy,
      location,
      scholarshipType,
    };
    onSearch(filters);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search Scholarships</Text>
      <TextInput
        style={styles.input}
        placeholder="Keyword"
        value={keyword}
        onChangeText={setKeyword}
      />
      <RNPickerSelect
        onValueChange={(value) => setEducationLevel(value)}
        items={[
          { label: 'Select Education Level', value: '' },
          { label: 'High School', value: 'high_school' },
          { label: 'Undergraduate', value: 'undergraduate' },
          { label: 'Graduate', value: 'graduate' },
          { label: 'PhD', value: 'phd' },
        ]}
        placeholder={{}}
        style={pickerSelectStyles}
        value={educationLevel}
      />
      <RNPickerSelect
        onValueChange={(value) => setFieldOfStudy(value)}
        items={[
          { label: 'Select Field of Study', value: '' },
          { label: 'Science', value: 'science' },
          { label: 'Engineering', value: 'engineering' },
          { label: 'Arts', value: 'arts' },
          { label: 'Business', value: 'business' },
          { label: 'Law', value: 'law' },
        ]}
        placeholder={{}}
        style={pickerSelectStyles}
        value={fieldOfStudy}
      />
      <RNPickerSelect
        onValueChange={(value) => setLocation(value)}
        items={[
          { label: 'Select Location', value: '' },
          { label: 'United States', value: 'us' },
          { label: 'Canada', value: 'canada' },
          { label: 'United Kingdom', value: 'uk' },
          { label: 'Australia', value: 'australia' },
          { label: 'Europe', value: 'europe' },
        ]}
        placeholder={{}}
        style={pickerSelectStyles}
        value={location}
      />
      <RNPickerSelect
        onValueChange={(value) => setScholarshipType(value)}
        items={[
          { label: 'Select Scholarship Type', value: '' },
          { label: 'Merit-based', value: 'merit' },
          { label: 'Need-based', value: 'need' },
          { label: 'Athletic', value: 'athletic' },
          { label: 'Minority', value: 'minority' },
          { label: 'International', value: 'international' },
        ]}
        placeholder={{}}
        style={pickerSelectStyles}
        value={scholarshipType}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchScholarship;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 20,
  },
});
