import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AccountTips from './accountTip';
import Swiper from 'react-native-swiper'
import { colors } from '../../utils/styles';


const AccountSafety = () => {

    return (
        <View style={styles.wrapper}>
            <View style={styles.main}>
                <Text style={styles.text}>Account Safety Tips </Text>
            </View>
            <Swiper showsButtons={false} height={600} >
                <View style={styles.container}>
                <Text style={styles.text}>SECURITY CHECKUP</Text>
                    <Text style={styles.detail}>
                   
                        Take the Security Checkup
                        One easy way to protect your Google Account is to take the Security Checkup. This step-by-step tool gives you personalized and actionable recommendations to help strengthen the security of your Google Account.</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}> Defend against hackers </Text>
                    <Text style={styles.detail}>

                        Defend against hackers
                        with 2‑Step Verification
                        2-Step Verification helps keep out anyone who shouldn’t have access to your account by requiring you to use a secondary factor on top of your username and password to log in to your account. For those who are at risk of targeted online attacks and need even stronger protections</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>   Use strong and unique passwords </Text>
                    <Text style={styles.detail}>

                        Use strong and unique passwords
                        Creating a strong, unique password for every account is one of the most critical steps you can take to protect your privacy. Using the same password to log in to multiple accounts, like your Google Account, social media profiles, and retail websites, increases your security risk.
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>   Know how scammers might reach you </Text>
                    <Text style={styles.detail}>
                        Know how scammers might reach you
                        Scammers can take advantage of goodwill by disguising their scams as legitimate messages. Alongside emails, scammers may also use text messages, automated calls, and malicious websites to exploit you</Text>
                </View>
            </Swiper>
        </View>
    )
}

export default AccountSafety;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 50

    },
    images: {
        width: '85%',
        // height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 20,
        marginHorizontal: 25
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.common,
        textAlign: 'center',
        // marginVertical: 10
    },
    main: {
        // borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '85%',
        padding: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 50,
        overflow: 'hidden',

    }
    ,
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        textAlign: 'center',
        height: 500,
        marginTop:20
    },
    detail: {
        textAlign: 'justify',
        fontSize: 16,
        color: '#888',
        marginTop: 20
    }
})