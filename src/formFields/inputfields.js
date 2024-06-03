import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../utils/styles';
import CustomTextInput from '../components/TextInput';

const InputField = ({label, required, value, onChangeText, type, ...props}) => {
  switch (type) {
    case 'text':
    case 'email':
    case 'phone':
    case 'date':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            {label} {required && <Text style={{color: 'red'}}>*</Text>}
          </Text>
          <CustomTextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            {...props}
            keyboardType={
              type === 'email'
                ? 'email-address'
                : type === 'phone'
                ? 'phone-pad'
                : 'default'
            }
            label={label}
          />
        </View>
      );
    case 'textarea':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            {label} {required && <Text style={{color: 'red'}}>*</Text>}
          </Text>
          <CustomTextInput
            style={[styles.input, styles.textArea]}
            value={value}
            onChangeText={onChangeText}
            multiline={true}
            numberOfLines={4}
            {...props}
          />
        </View>
      );
    case 'checkbox':
      return (
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => onChangeText(!value)}
            style={styles.checkbox}>
            <View style={value ? styles.checked : styles.unchecked} />
            <Text style={styles.checkboxText}>{label}</Text>
          </TouchableOpacity>
        </View>
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  checked: {
    width: 20,
    height: 20,
    backgroundColor: colors.primary,
    marginRight: 10,
    borderRadius: 4,
  },
  unchecked: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
    marginRight: 10,
    borderRadius: 4,
  },
  checkboxText: {
    fontSize: 16,
  },
});

export default InputField;
