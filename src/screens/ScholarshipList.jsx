import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';


const ScholarshipsListScreen = () => {
  // Sample scholarship data
  const scholarships = [
    {
      id: 1,
      title: 'Sample Scholarship 1',
      coverImage: require('../assets/images/cover.jpg'),
      deadline: 'April 30, 2024',
    },
    {
      id: 2,
      title: 'Sample Scholarship 2',
      coverImage: require('../assets/images/cover.jpg'),
      deadline: 'May 15, 2024',
    },
    {
        id: 3,
        title: 'Sample Scholarship 2',
        coverImage: require('../assets/images/cover.jpg'),
        deadline: 'May 15, 2024',
      },
      {
        id: 4,
        title: 'Sample Scholarship 2',
        coverImage: require('../assets/images/cover.jpg'),
        deadline: 'May 15, 2024',
      },
    // Add more scholarship objects as needed
  ];

  return (
    <ScrollView style={styles.container}>
      {scholarships.map((scholarship) => (
        <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
      ))}
    </ScrollView>
  );
};

const ScholarshipCard = ({ scholarship }) => (
  <Card style={styles.card}>
    <Card.Cover source={scholarship.coverImage} />
    <Card.Content>
      <Title>{scholarship.title}</Title>
      <Paragraph>Deadline: {scholarship.deadline}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button mode="contained" onPress={() => alert('Apply button pressed')}>
        Apply
      </Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  card: {
    marginBottom: 10,
  },
});

export default ScholarshipsListScreen;
