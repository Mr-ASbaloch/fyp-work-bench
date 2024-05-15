import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../utils/styles';

const DashboardCard = ({ imageSource, title, subTitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardCard;

const styles = StyleSheet.create({
  card: {
    width: '30%',
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    margin: 5,
    padding: 5,
  },
  image: {
    width: 35,
    height: 35,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
    margin: 5,
   

  },
  textContainer: {
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 10,
    color: colors.bgPrimary,
    textAlign: 'center',
  },
});