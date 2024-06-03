import React, {useEffect} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {fetchAppliedScholarships} from '../../store/slices/applicationsSlice';

const ScholarshipDetail = ({route}) => {
  const {scholarship} = route.params;
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user.id);
  const applications = useSelector(state => state.applications.applications);
  const hasApplied = applications.some(
    app => app.scholarshipId === scholarship.id && app.userId === userId,
  );

  useEffect(() => {
    console.log(scholarship);
  }, []);

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{scholarship?.title}</Text>
      <Text style={styles.sectionTitle}>
        {scholarship?.eligibilityCriteria}
      </Text>
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.text}>{scholarship?.description}</Text>
      <Text style={styles.sectionTitle}>Posted By</Text>
      <Text style={styles.text}>{scholarship?.postedBy}</Text>
      <Button
        text={'Apply Now'}
        onPress={() => {
          navigation.navigate('applyForm', {scholarship});
        }}
        disabled={hasApplied}
      />
      {hasApplied && (
        <Text style={styles.appliedText}>
          You have already applied for this scholarship.
        </Text>
      )}
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
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
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
