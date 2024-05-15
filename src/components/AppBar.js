import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { colors } from '../utils/styles';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={[styles.container, styles.shadow]}>
            <View style={styles.innerContainer}>

                <TouchableOpacity onPress={() => { navigation.navigate('profile') }} >
                    <Image
                        source={require('../assets/icons/dp.png')}
                        style={styles.profileImage}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>SFAO</Text>
                <TouchableOpacity style={styles.iconContainer} onPress={()=>{
                    navigation.navigate('Notification')
                }}>
                    <Image style={styles.profileImage} source={require('../assets/icons/notification.png')} />
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: colors.white,

    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
     
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 20,
      
        
       
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.blackText
    },
    iconContainer: {
        padding: 5,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default Header;
