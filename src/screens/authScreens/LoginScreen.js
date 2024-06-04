import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Button from '../../components/Button';
import { colors } from '../../utils/styles';
import CustomTextInput from '../../components/TextInput';
import NavigationArrow from '../../components/NavigationArrow';
import { privateStyle } from '../../components/styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/slices/authSlice';

const mainImage = require('../../assets/icons/Aid.png');
import Toast from 'react-native-toast-message';
const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter a valid email address',
      });
      return;
    }

    setLoading(true);

    try {
      await dispatch(loginUser({ email, password }));
      // Toast.show({
      //   type: 'success',
      //   text1: 'Login Successful',
      // });
      navigation.navigate('dashBoard');
    } catch (error) {
      // Toast.show({
      //   type: 'error',
      //   text1: 'Login Failed',
      //   text2: error.message,
      // });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: colors.white }}>
      <NavigationArrow onPress={() => navigation.navigate('RegisterScreen')} />
      <Image source={mainImage} style={styles.image} />

      <Text style={privateStyle.heading}>Welcome Back!</Text>
      <Text style={styles.para}>Please login to continue</Text>

      <View style={{ width: '100%', paddingHorizontal: 20, padding: 5 }}>
        <CustomTextInput label="Email" value={email} onChangeText={setEmail} />
        <CustomTextInput // Use the CustomTextInput component
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        {/* Forgot password link */}
        <Text
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
          style={styles.forgot}>
          {' '}
          Forgot Password ?
        </Text>
      </View>

      {/* Login Button with Loader */}
      <Button text={loading ? <ActivityIndicator size="small" color="#fff" /> : 'Login'} onPress={handleSubmit} loading={loading} />

      <View style={styles.registerTextContainer}>
        <Text style={styles.buttonText}>Don't have an account?</Text>
        <Text
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}
          style={styles.loginText}>
          Register here
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: colors.white,
  },
  heading: {
    color: colors.common,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  registerTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    margin: 20,
    marginTop: 35,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  loginText: {
    fontSize: 14,
    color: colors.common,
    textAlign: 'center',
  },
  para: {
    color: colors.grey,
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 25,
  },
  forgot: {
    fontSize: 14,
    color: colors.common,
    textAlign: 'center',
    marginTop: 12,
  },
});
