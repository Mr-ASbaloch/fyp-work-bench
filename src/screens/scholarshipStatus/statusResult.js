import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatusResult = ({ route, navigation }) => {
  const { status } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>Status: {status}</Text>
      {/* You can customize the UI based on the status */}
      {status === 'pending' && (
        <Text style={styles.pendingText}>Your scholarship status is pending.</Text>
      )}
      {status === 'approved' && (
        <Text style={styles.approvedText}>Congratulations! Your scholarship has been approved.</Text>
      )}
      {status === 'rejected' && (
        <Text style={styles.rejectedText}>We regret to inform you that your scholarship application has been rejected.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pendingText: {
    fontSize: 16,
    color: 'orange',
    textAlign: 'center',
  },
  approvedText: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
  rejectedText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default StatusResult;
