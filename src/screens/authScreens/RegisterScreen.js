import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Button from '../../components/Button';
import { colors, commonStyles } from '../../utils/styles';
import NavigationArrow from '../../components/NavigationArrow';
import CustomTextInput from '../../components/TextInput';
import { privateStyle } from '../../components/styles';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';

const mainImage = require('../../assets/icons/Aid.png');

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async () => {
    // Trimmed fields
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedName = name.trim();
    const trimmedPhoneNumber = phoneNumber.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    // Validation checks
    if (!trimmedEmail || !trimmedPassword || !trimmedName || !trimmedPhoneNumber || !trimmedConfirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (!isValidPassword(trimmedPassword)) {
      Alert.alert('Error', 'Password must be at least 8 characters long and include digits, special characters, uppercase, and lowercase letters.');
      return;
    }

    if (trimmedPassword !== trimmedConfirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    // Set loading state to true
    setLoading(true);

    try {
      // Attempt registration
      await dispatch(registerUser({
        displayName: trimmedName,
        email: trimmedEmail,
        password: trimmedPassword,
        phoneNumber: trimmedPhoneNumber,
      }));

      // Registration successful, show success toast
      showToast('Success', 'Registration successful!');
      // Optionally, navigate to another screen upon successful registration
      navigation.navigate('LoginScreen');
    } catch (error) {
      // Registration failed, show error toast
      showToast('Error', error.message);
    } finally {
      // Reset loading state regardless of success or failure
      setLoading(false);
    }
  };

  const showToast = (title, message) => {
    Alert.alert(title, message);
  };

  return (
    <ScrollView style={{ backgroundColor: colors.white }}>
      <NavigationArrow
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
      />
      <Image source={mainImage} style={styles.image} />
      <Text style={privateStyle.heading}>Create an Account</Text>

      <View style={{ width: '100%', paddingHorizontal: 20, padding: 5 }}>
        <CustomTextInput label="Name" value={name} onChangeText={setName} />
        <CustomTextInput label="Email" value={email} onChangeText={setEmail} />
        <CustomTextInput
          label="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <CustomTextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <CustomTextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
      </View>

      <Button text={loading ? <ActivityIndicator size="small" color="#fff" /> : 'Register Account'} onPress={handleSubmit} loading={loading} />


      <View style={styles.registerTextContainer}>
        <Text style={styles.buttonText}>Already Have Account?</Text>
        <Text
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
          style={styles.loginText}>
          Login Account
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  inputs: {
    color: colors.common,
    borderRadius: 40,
    margin: 10,
    ...commonStyles.bgPrimary,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: colors.white,
  },
  registerTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    margin: 20,
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
});
