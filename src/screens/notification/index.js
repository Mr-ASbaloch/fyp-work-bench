import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/styles';

const NotificationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.notification}>
        <Text style={styles.notificationText}> <Text style={styles.star}>*</Text> Your scholarship application has been approved.</Text>
      </View>
     
      {/* Add more notifications as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  notification: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 16,
  },
  star:{
    color:colors.greenLight,
    fontSize: 28,
    fontWeight: 'bold',
    margin:5,

  }
});

export default NotificationScreen;
