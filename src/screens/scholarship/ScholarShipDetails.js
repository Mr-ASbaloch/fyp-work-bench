import React, { useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/styles';


const ScholarshipDetail = ({ route }) => {
  const { scholarship } = route.params;
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user.id);
  const applications = useSelector(state => state.applications.applications);
  const hasApplied = applications.some(
    app => app.scholarshipId === scholarship.id && app.userId === userId,
  );

  const currentDate = new Date();
  const deadlineDate = new Date(scholarship.deadline);
  const isPastDeadline = currentDate > deadlineDate;

  useEffect(() => {
    console.log(scholarship);
  }, [scholarship]);

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View 
        style={{
          padding: 10,
          backgroundColor: 'white',
          marginBottom: 20,
        }}
      >
        <Text style={styles.title}>{scholarship?.title}</Text>
        <Text style={styles.sectionTitle}>
          {scholarship?.eligibilityCriteria}
        </Text>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.text}>{scholarship?.description}</Text>
        <Text style={styles.sectionTitle}>Eligibility Criteria</Text>
        <Text style={styles.text}>{scholarship?.criteria}</Text>
        <Text style={styles.sectionTitle}>Academic Level</Text>
        <Text style={styles.text}>{scholarship?.degreeLevel}</Text>
        <Text style={styles.sectionTitle}>Posted At</Text>
        <Text style={[styles.text]}>{scholarship?.createdAt}</Text>
        <Text style={styles.sectionTitle}>Deadline</Text>
        <Text style={[styles.text, { color: 'red' }]}>{scholarship?.deadline}</Text>
        <Text style={styles.sectionTitle}>Amount</Text>
        <Text style={[styles.text]}>{scholarship?.amount}</Text>
        <Button
          text={'Apply Now'}
          onPress={() => {
            navigation.navigate('applyForm', { scholarship });
          }}
          disabled={hasApplied || isPastDeadline}
        />
        {(hasApplied || isPastDeadline) && (
          <Text style={styles.appliedText}>
            {hasApplied
              ? 'You have already applied for this scholarship.'
              : 'The application deadline has passed. Can not Apply now.'}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blue,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.blue,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  appliedText: {
    fontSize: 14,
    color: '#28a745',
    marginTop: 20,
  },
});

export default ScholarshipDetail;
