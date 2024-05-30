import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';

const ScholarshipComponent = ({ name, description, postedDate, deadline, handleMore }) => {
  return (
    
    <View style={styles.scholarshipContainer}>
      <Text style={styles.scholarshipName}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.dateText}>Posted Date: {postedDate}</Text>
      <Text style={styles.deadlineText}>Deadline: {deadline}</Text>
      <Button text={'Read More'} onPress={handleMore}  />
     
    </View>
  );
};

const styles = StyleSheet.create({
  scholarshipContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginVertical: 10,
  },
  scholarshipName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  dateText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  deadlineText: {
    fontSize: 14,
    color: '#d9534f',
    marginBottom: 20,
  },
  button: {
    alignSelf: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ScholarshipComponent;
