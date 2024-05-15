import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const AboutUsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>About Us</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum justo eget
          magna fermentum, sed facilisis lectus maximus. Integer nec lectus nec dolor mollis
          lacinia ut ac arcu.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Our Mission</Text>
        <Text style={styles.paragraph}>
          Our mission is to provide accessible and high-quality educational resources to
          students worldwide. We strive to empower learners of all backgrounds to achieve
          their academic and personal goals.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Our Team</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum justo eget
          magna fermentum, sed facilisis lectus maximus. Integer nec lectus nec dolor mollis
          lacinia ut ac arcu.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.paragraph}>
          Email: contact@example.com {'\n'}
          Phone: +1 (123) 456-7890 {'\n'}
          Address: 123 Main Street, City, Country
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
  },
});

export default AboutUsScreen;
