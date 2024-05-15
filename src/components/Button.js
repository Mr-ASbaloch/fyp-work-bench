import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {colors} from '../utils/styles';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.common,
    padding: 15,
    borderRadius: 5,
    width: '85%',
    paddingHorizontal: 10,
    alignSelf: 'center',
    // margin: 'auto',
    marginTop:15
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
