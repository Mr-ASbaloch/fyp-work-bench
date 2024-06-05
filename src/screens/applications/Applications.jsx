import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchYourApplications} from '../../store/slices/applicationsSlice';

const Applications = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state?.auth?.user?.id);
  const applications = useSelector(state => state?.applications?.applications);

  useEffect(() => {
    if (userId) {
      dispatch(fetchYourApplications(userId));
    }
  }, [userId]);

  const getStatusStyle = status => {
    switch (status) {
      case 'submitted':
        return styles.statusSubmitted;
      case 'approved':
        return styles.statusApproved;
      case 'rejected':
        return styles.statusRejected;
      case 'waiting':
        return styles.statusWaiting;
      default:
        return styles.statusDefault;
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.name}>{item?.fullName}</Text>
        <Text style={[styles.status, getStatusStyle(item?.status)]}>
          Status: {item?.status}
        </Text>
        <Text style={styles.detail}>Degree Program: {item?.degreeProgram}</Text>
        <Text style={styles.detail}>Department: {item?.department}</Text>
        <Text style={styles.detail}>Current CGPA: {item?.currentCGPA}</Text>
        <Text style={styles.detail}>City: {item?.city}</Text>
        <Text style={styles.detail}>Email: {item?.email}</Text>
        <Text style={styles.detail}>Mobile Number: {item?.mobileNumber}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Applications</Text>
      <FlatList
        data={applications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    marginVertical: 4,
  },
  statusSubmitted: {
    color: 'blue',
  },
  statusApproved: {
    color: 'green',
  },
  statusRejected: {
    color: 'red',
  },
  statusWaiting: {
    color: 'orange',
  },
  statusDefault: {
    color: '#888',
  },
  detail: {
    fontSize: 14,
    color: '#555',
  },
});

export default Applications;
