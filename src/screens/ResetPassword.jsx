import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    // Add your logic to reset the password here
    if (password === confirmPassword) {
      // Passwords match, proceed with resetting the password
      console.log('Password reset successful');
    } else {
      // Passwords do not match, show an error message
      console.log('Passwords do not match');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Create new password</Text>
        <Text style={{marginBottom: 8}}>
          your new password must be unique from those on your account
        </Text>
        <Text style={styles.lable}>New password</Text>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.lable}>Confirm password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => {
            handleResetPassword;
          }}
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 26,
    // marginTop:20
  },
  input: {
    marginHorizontal: 15,
    // height: 40,
    // paddingHorizontal: 55,
    backgroundColor: 'whitesmoke',
    borderRadius: 100,
    padding: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#333E44',
    padding: 15,
    width: '90%',
    alignSelf: 'center',
    margin: 15,
    // height: 40,
    borderRadius: 100,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#24306e',

    marginBottom: 5,
  },
  lable: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    padding: 12,
  },
});

export default ResetPassword;
