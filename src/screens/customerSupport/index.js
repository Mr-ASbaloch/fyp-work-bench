import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BasicInfoButton from '../../components/basicInfo';
import NavigationArrow from '../../components/NavigationArrow';
import { useNavigation } from '@react-navigation/native';

const SupportAndServices = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <NavigationArrow onPress={()=>{
        navigation.goBack()
      }} />

      <View style={styles.logoContainer}>
        <Image
         source={require('../../assets/icons/help.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>Tell Us how we can help</Text>
        <Text style={styles.description}>
          Please select the option that best describes your needs. We are here to help you.
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <BasicInfoButton buttonText={'Quick Support and Complaint'} source={require('../../assets/icons/customer-support.png')} arrow={require('../../assets/icons/chevron.png')} onPress={() => {
            navigation.navigate('Complaints')

          }}  />
        <BasicInfoButton buttonText={'Track Your Complaint'} source={require('../../assets/icons/report.png')} 
          onPress={() => {
            navigation.navigate('Complaint')

          }}
        />
        <BasicInfoButton buttonText={'Tutorials for help '} source={require('../../assets/icons/video.png')}
          onPress={() => {
            navigation.navigate('Tutorial')

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
  },
  content: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    // fontWeight: 'bold',
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

export default SupportAndServices;
