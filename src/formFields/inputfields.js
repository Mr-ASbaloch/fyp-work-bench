import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import { colors } from '../utils/styles';
import CustomTextInput from '../components/TextInput';
import DateTimePicker from '@react-native-community/datetimepicker';

const InputField = ({ label, required, value, onChangeText, type, options, ...props }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const openModal = () => setVisibleModal(true);
  const closeModal = () => setVisibleModal(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    onChangeText(currentDate.toISOString().split('T')[0]);
  };

  switch (type) {
    case 'text':
    case 'email':
    case 'phone':
      return (
        <View style={styles.inputContainer}>
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
            label={required ? `${label} *` : label}
          />
        </View>
      );
    case 'textarea':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            {label} {required && <Text style={{ color: 'red' }}>*</Text>}
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
    case 'select':
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            {label} {required && <Text style={{ color: 'red' }}>*</Text>}
          </Text>
          <TouchableOpacity style={styles.input} onPress={openModal}>
            <Text style={styles.selectText}>{value || `Select ${label}`}</Text>
          </TouchableOpacity>
          <Modal
            visible={visibleModal}
            transparent={true}
            animationType="slide"
            onRequestClose={closeModal}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <FlatList
                  data={options}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.option}
                      onPress={() => {
                        onChangeText(item);
                        closeModal();
                      }}>
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Modal>
        </View>
      );
    case 'date':
      return (
        <View style={styles.inputContainer}>

          <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.selectText}>{value || `Select ${label}`}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
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
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 'auto',
    width: '95%',
    paddingVertical:2,
    textAlign:'center',
    display:'flex',
    marginLeft:5

  },
  selectText: {
    color: '#333',
    textAlign: 'center',	
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    width: '80%',
    maxHeight: '50%',
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  optionText: {
    fontSize: 16,
  },
});

export default InputField;
