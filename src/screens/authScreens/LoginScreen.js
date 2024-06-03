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

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Check if both email and password are empty
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Email and password are required');
      return;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    // Set loading state to true
    setLoading(true);

    try {
      // Attempt login
      await dispatch(loginUser({ email, password }));
      // If login is successful, navigate to the dashboard or any other screen
      navigation.navigate('dashBoard');
    } catch (error) {
      // Display error message if login fails
      Alert.alert('Error', error.message);
    } finally {
      // Reset loading state regardless of success or failure
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
