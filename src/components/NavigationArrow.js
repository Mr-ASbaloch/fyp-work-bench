import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
// import {Image} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

import {colors} from '../utils/styles';

const NavigationArrow = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('../assets/icons/chevron.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default NavigationArrow;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 23,
    tintColor: colors.common,
    top: 30,
    left: 35,
    marginBottom:20,
    // position: 'absolute',
  },
});
