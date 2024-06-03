import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import InputField from '../../formFields/inputfields';
import { colors } from '../../utils/styles';
import formFields from '../../formFields/formFields';
import { applyForScholarship } from '../../store/slices/applicationsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const PersonalData = ({ route }) => {
  const { scholarship } = route?.params;
  const scholarshipId = scholarship?.id;

  console.log(scholarshipId);

  const userId = useSelector((state) => state?.auth?.user?.id);
  console.log("userId", userId)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [form, setForm] = useState({
    fullName: '',
    birthdate: '',
    email: '',
    mobileNumber: '',
    homeAddress: '',
    city: '',
    province: '',
    department: '',
    semester: '',
    currentCGPA: '',
    otherMobileNumber: '',
    postalCode: '',
    tehsilAddress: '',
    netFamilyIncome: '',
    assetIncome: '',
    rentPayment: '',
    sop: '',
    scholarshipId,
    status: 'submitted',
    degreeProgram: '',
  });


  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    const requiredFields = [
      'fullName',
      'birthdate',
      'email',
      'mobileNumber',
      'homeAddress',
      'city',
      'province',
      'department',
      'semester',
      'currentCGPA',
      'postalCode',
      'tehsilAddress',
    ];
    for (let field of requiredFields) {
      if (!form[field]) {
        Alert.alert('Error', 'Please fill out all required fields');
        return;
      }
    }

    // Filter out undefined fields
    const filteredForm = Object.fromEntries(
      Object.entries(form).filter(([key, value]) => value !== undefined)
    );

    console.log(filteredForm);
    await dispatch(applyForScholarship({ form: filteredForm, userId }));
    navigation.goBack();
  };

  const renderSection = (section) => {
    return (
      <View key={section.section} style={styles.section}>
        <Text style={styles.sectionTitle}>{section.section}</Text>
        {section.fields.map((field) => (
          <InputField
            key={field.name}
            label={field.label}
            required={field.required}
            value={form[field.name]}
            onChangeText={(text) => handleChange(field.name, text)}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10 }}>
      {formFields.map((section) => renderSection(section))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.primary,
  },
  submitButton: {
    backgroundColor: colors.bgPrimary,
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PersonalData;
