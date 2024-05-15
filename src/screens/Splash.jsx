import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const Splash = ({navigation}) => {
 

  const App = () => {
    // Implement your signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.background}>
     <Image style={styles.Image} source={require('../assets/icons/splash.png')} />
    </View>

  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    // opacity:0.5
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  Image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Splash;
