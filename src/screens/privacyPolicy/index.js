import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum justo eget
          magna fermentum, sed facilisis lectus maximus. Integer nec lectus nec dolor mollis
          lacinia ut ac arcu.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Scholarships</Text>
        <Text style={styles.paragraph}>
          Our app may offer scholarships to eligible users. By applying for a scholarship, you
          agree to provide necessary information for evaluation purposes. This information
          will be handled according to our Privacy Policy.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>User Information</Text>
        <Text style={styles.paragraph}>
          We collect certain user information to provide and improve our services. This may
          include but is not limited to: name, email address, demographic information, and
          device information. We do not share this information with third parties except as
          described in our Privacy Policy.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Data Handling</Text>
        <Text style={styles.paragraph}>
          We take the security of user data seriously and implement appropriate measures to
          protect it from unauthorized access, alteration, or disclosure. We may collect and
          use anonymized data for analytics and service improvement purposes.
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

export default PrivacyPolicyScreen;
