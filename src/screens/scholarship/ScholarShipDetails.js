// ScholarshipDetail.js

import React from 'react';
import { StyleSheet, Text, View, ScrollView,  } from 'react-native';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const ScholarshipDetail = () => {
    const navigation =useNavigation()
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Example Scholarship</Text>
      
      <Text style={styles.sectionTitle}>Eligibility Criteria</Text>
      <Text style={styles.text}>1. Must be a full-time student.</Text>
      <Text style={styles.text}>2. GPA of 3.0 or higher.</Text>
      <Text style={styles.text}>3. Demonstrated financial need.</Text>
      <Text style={styles.text}>4. Community service involvement.</Text>
      
      <Text style={styles.sectionTitle}>How to Apply</Text>
      <Text style={styles.text}>1. Complete the online application form.</Text>
      <Text style={styles.text}>2. Write a personal statement (500 words).</Text>
      <Text style={styles.text}>3. Submit two letters of recommendation.</Text>
      <Text style={styles.text}>4. Provide proof of enrollment and transcripts.</Text>
      
      <Text style={styles.sectionTitle}>Attach Documents</Text>
      <Text style={styles.text}>1. Personal Statement</Text>
      <Text style={styles.text}>2. Letters of Recommendation</Text>
      <Text style={styles.text}>3. Proof of Enrollment</Text>
      <Text style={styles.text}>4. Academic Transcripts</Text>
      <Button text={'apply now'}  onPress={()=>{
        navigation.navigate('applyForm')
      }} />
      
    </ScrollView>
  );
};

export default ScholarshipDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'white'
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
