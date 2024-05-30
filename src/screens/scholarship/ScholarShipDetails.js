// ScholarshipDetail.js

import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const ScholarshipDetail = ({route}) => {
  const {scholarship} = route.params;
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
        text={'apply now'}
        onPress={() => {
          navigation.navigate('applyForm');
        }}
      />
    </ScrollView>
  );
};

export default ScholarshipDetail;

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
  buttonContainer: {
    marginTop: 20,
  },
});
