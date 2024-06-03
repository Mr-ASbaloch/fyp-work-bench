import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchYourApplications} from '../../store/slices/applicationsSlice';

const Applications = () => {
  const dispatch = useDispatch();
  const applications = useSelector(state => state.applications);
  useEffect(() => {
    dispatch(fetchYourApplications());
    console.log(applications, '<<<<<<<<<<<<==============applications');
  }, []);

  return (
    <View>
      <Text>Applications</Text>
    </View>
  );
};

export default Applications;

const styles = StyleSheet.create({});
