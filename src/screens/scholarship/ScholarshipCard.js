import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';

const ScholarshipComponent = ({ handleMore, data }) => {
  const userId = useSelector(state => state.auth.user.id);
  const applications = useSelector(state => state.applications.applications);
  const hasApplied = applications.some(app => app.scholarshipId === data.id && app.userId === userId);

  return (
    <View style={styles.scholarshipContainer}>
      <Text numberOfLines={3} style={styles.scholarshipName}>{data?.title}</Text>
      <Text numberOfLines={3} style={styles.description}>{data?.description}</Text>
     
      <Text style={styles.deadlineText}>Deadline: {data?.deadline}</Text>
      {hasApplied && <Text style={styles.appliedText}>Already Applied</Text>}
      <Button text={'Read More'} onPress={handleMore} />
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
  appliedText: {
    fontSize: 14,
    color: '#28a745',
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
