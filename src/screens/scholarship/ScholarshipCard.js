// ScholarshipComponent.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const ScholarshipComponent = ({ name, description, postedDate, deadline, handleApply , handleMore }) => {
 

  return (
    <View style={styles.scholarshipContainer}>
      <Text style={styles.scholarshipName}>{name}</Text>
      <Text>{description}</Text>
      <Text>Posted Date: {postedDate}</Text>
      <Text>Deadline: {deadline}</Text>
      <Button title="Read More" onPress={handleMore} />
      <Button title="Apply" onPress={handleApply} />
    </View>
  );
};

export default ScholarshipComponent;
