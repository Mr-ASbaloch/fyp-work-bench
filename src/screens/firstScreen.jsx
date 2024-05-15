import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import { colors, commonStyles } from '../utils/styles';

const FirstScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
     <Image 
        source={require('../assets/images/downloads.jpg')}
        // style={styles.image}
        resizeMode="cover"
     />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Achieve your dreams 
        </Text>
        <Text style={styles.textPara}>
          Get scholarships that match your educational financial needs and
          achieve your goals.
        </Text>
        <TouchableOpacity  onPress={()=>{navigation.navigate("start")}} style={styles.button}>
          <Text style={styles.buttonText} >Explore now </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin:20,
    flex: 1,
    backgroundColor: '#FFFFFF',

   
  },
  imageContainer: {
    flex: 1, // Take half of the screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius:10
  },
  textContainer: {
    flex: 1, // Take the other half of the screen
    paddingHorizontal: 20, // Padding for the text
    // justifyContent: 'center', 
    // Center vertically
    backgroundColor:'white',
    paddingTop:20
  },
  text: {
    textAlign: 'center',
    fontSize: 26,
    color :'#24306e',
    marginBottom: 10,
    fontWeight: 'bold',
    paddingBottom:15, 
    marginTop:25

  },
  textPara:{
    textAlign: 'center',
    fontSize: 16,
    // color :'black',
    marginBottom: 10,
    fontWeight: '400',
  },
  button:{
    ...commonStyles.btnColor,
    paddingVertical: 10,
    borderRadius: 100,
    marginTop: 20,
    width: 160,
    alignSelf: 'center',
  },
    buttonText: {
        fontSize: 16,
        color:colors.white,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
});

export default FirstScreen;
