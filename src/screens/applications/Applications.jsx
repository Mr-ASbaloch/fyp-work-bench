import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchYourApplications} from '../../store/slices/applicationsSlice';

const Applications = () => {
  const dispatch = useDispatch();
  const applications = useSelector(state => state.applications);

  useEffect(() => {
    dispatch(fetchYourApplications());
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.amount}</Text>
        <Text>{item.deadline}</Text>
        {/* Add more fields as needed */}
      </View>
    );
  };

  return (
    <View>
      <Text>Applications</Text>
      <FlatList data={applications} renderItem={renderItem} keyExtractor={item => ('')} />
    </View>
  );
};

export default Applications;