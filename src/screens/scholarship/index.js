// ScholarshipList.js

import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import ScholarshipComponent from './ScholarshipCard';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchScholarships} from '../../store/slices/scholarshipSlice';
import {fetchAppliedScholarships} from '../../store/slices/applicationsSlice';

const ScholarshipList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const scholarships = useSelector(state => state.scholarships.items);
  const applications = useSelector(state => state.applications.applications);
  const userId = useSelector(state => state?.auth?.user?.id);

  useEffect(() => {
    dispatch(fetchScholarships());
    console.log(
      '++++++++++++++++++++++Scholarships fetched successfully++++++++++++',
    );
    console.log(scholarships);
  }, []);

  useEffect(() => {
    dispatch(fetchAppliedScholarships(userId));
    console.log(
      '++++++++++++++++++++++Applied Scholarships fetched successfully++++++++++++',
    );
    console.log(applications);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <Text style={styles.heading}>Scholarship List</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {scholarships.map(scholarship => (
          <ScholarshipComponent
            key={scholarship?.id}
            data={scholarship}
            handleMore={() => {
              navigation.navigate('Details', {scholarship});
            }}
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
    shadowOffset: {width: 0, height: 2},
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
