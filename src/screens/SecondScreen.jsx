import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { commonStyles } from '../utils/styles';

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/download.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Bachelors , Masters , PHD</Text>
        <Text style={styles.textPara}>
          Get scholarships according to your degree of prefrences.
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>SignIn </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin:20,
    flex: 1,
    ...commonStyles.bgPrimary
  },
  imageContainer: {
    flex: 1, // Take half of the screen
  },
  image: {
    width: '100%',
    height: '85%',
    // borderRadius: 10,
    backgroundColor:'white'
  },
  textContainer: {
    flex: 1, // Take the other half of the screen
    paddingHorizontal: 20, // Padding for the text
    // justifyContent: 'center',

    // Center vertically
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#24306e',
    marginBottom: 10,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  textPara: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#24306e',
    paddingVertical: 10,
    borderRadius: 35,
    marginTop: 25,
    width: 250,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default StartScreen;
