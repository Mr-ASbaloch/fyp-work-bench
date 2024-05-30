// ScholarshipList.js

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import ScholarshipComponent from './ScholarshipCard';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/styles';

const ScholarshipList = () => {
  const navigation = useNavigation();

  const scholarships = [
    { id: 1, name: "Example Scholarship 1", description: "Description for scholarship 1", postedDate: "April 25, 2024", deadline: "May 15, 2024" },
    { id: 2, name: "Example Scholarship 2", description: "Description for scholarship 2", postedDate: "April 26, 2024", deadline: "May 16, 2024" },
    { id: 3, name: "Example Scholarship 3", description: "Description for scholarship 3", postedDate: "April 27, 2024", deadline: "May 17, 2024" },
    { id: 4, name: "Example Scholarship 4", description: "Description for scholarship 4", postedDate: "April 28, 2024", deadline: "May 18, 2024" },
    { id: 5, name: "Example Scholarship 5", description: "Description for scholarship 5", postedDate: "April 29, 2024", deadline: "May 19, 2024" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <Text style={styles.heading}>Scholarship List</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {scholarships.map(scholarship => (
          <ScholarshipComponent
            key={scholarship.id}
            name={scholarship.name}
            description={scholarship.description}
            postedDate={scholarship.postedDate}
            deadline={scholarship.deadline}
            handleMore={() => { navigation.navigate('Details') }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScholarshipList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android shadow
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.blue,

  },
  contentContainer: {
    paddingTop: 80, // Adjust according to the height of your sticky header
    paddingHorizontal: 20,
  },
});
