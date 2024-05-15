import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BasicInfoButton from '../../components/basicInfo';
import NavigationArrow from '../../components/NavigationArrow';
import {AntDesign} from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <NavigationArrow onPress={()=>{
        navigation.goBack()
      }} />

      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/setting.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>Settings</Text>
        
      </View>
      <View style={styles.buttonsContainer}>
        <BasicInfoButton buttonText={'My profile'} source={require('../../assets/icons/edit.png')} arrow={require('../../assets/icons/chevron.png')}  onPress={() => {
            navigation.navigate('Profile')

          }} />
        <BasicInfoButton buttonText={'About Us'} source={require('../../assets/icons/report.png')} arrow={require('../../assets/icons/terms.png')}
          onPress={() => {
            navigation.navigate('About Us')

          }}
        />
        <BasicInfoButton buttonText={'Terms & Conditions '} source={require('../../assets/icons/terms.png')}
          onPress={() => {
            navigation.navigate('Terms and Conditions')

          }} />
           <BasicInfoButton buttonText={'Privacy policy '} source={require('../../assets/icons/protection.png')}
          onPress={() => {
            navigation.navigate('Privacy Policy')

          }} />
           <BasicInfoButton buttonText={'Logout Account '} source={require('../../assets/icons/icons8-logout-48.png') }
          onPress={() => {
            // navigation.navigate('')

          }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },

  header: {
    width: '100%',
    // flexDirection: 'row',
    // // justifyContent: 'space-between',
    // alignItems: 'center',
    // // paddingHorizontal: 20,
    // backgroundColor: 'white',
    // shadowColor: '#000',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    height: 80,
  },
  logoContainer: {
    marginBottom: 20,
    marginTop: 60,

  },
  logo: {
    width: 80, // Adjust width as needed
    height: 80, // Adjust height as needed
    alignSelf: 'center',
    borderRadius:30,
    overflow: 'hidden',
  },
  content: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 20,
    color: 'grey',
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 20,
    backgroundColor: 'white',
    padding: 15,
    marginTop: 60,
    width: '100%',
    marginHorizontal: 'auto'

  },
});

export default Setting;
