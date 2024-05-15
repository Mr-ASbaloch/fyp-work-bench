import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/styles';

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/contact.png')} style={styles.Image} />
      <Text style={styles.heading}>Contact Us</Text>
      <TouchableOpacity style={styles.contactInfo}>
        <Image source={require('../../assets/icons/icons8-email-50.png')} style={styles.icon} />
        <Text style={styles.info}>contact@example.com</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactInfo}>
        <Image source={require('../../assets/icons/icons8-phone-48.png')} style={styles.icon} />
        <Text style={styles.info}>123-456-7890</Text>
      </TouchableOpacity>
      <TouchableOpacity>

        <Text style={styles.info} >Follow us on Social Platform</Text>
      </TouchableOpacity>
      <View style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/icons8-youtube-96.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/icons8-twitter-100.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/icons8-facebook-96.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: colors.common,
    marginTop: 20,


  },
  contactInfo: {
    flexDirection: 'row',
    marginBottom: 30,
    // backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 50,
    borderColor: colors.common,
    borderWidth: 1,

  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  info: {
    fontSize: 18,
  },
  Image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },

});

export default ContactUsScreen;