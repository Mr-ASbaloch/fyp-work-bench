import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import InputField from '../../formFields/inputfields';
import {colors} from '../../utils/styles';
import formFields from '../../formFields/formFields';

const PersonalData = () => {
  const [form, setForm] = useState({
    fullName: '',
    fatherName: '',
    birthdate: '',
    email: '',
    mobileNumber: '',
    otherMobileNumber: '',
    homeAddress: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    tehsilAddress: '',
    status: '',
    professionalStatus: '',
    companyName: '',
    telOff: '',
    mobile: '',
    occupationType: '',
    ntn: '',
    designation: '',
    grossIncome: '',
    netMonthlyIncome: '',
    supportingPersonName: '',
    relationship: '',
    supportingPersonOccupation: '',
    monthlyFinancialSupport: '',
    assetIncome: '',
    accType: '',
    accStatus: '',
    rentPayment: '',
    plotSize: '',
    coveredArea: '',
    accDetails: [
      {location: '', bedrooms: '', airConditioners: '', monthlyRent: ''},
    ],
    tuitionCharges: '',
    gotScholarships: false,
    scholarships: [
      {
        instituteName: '',
        scholarshipName: '',
        totalAmount: '',
        period: '',
        classLevel: '',
      },
    ],
    sop: '',
    otherHouse: false,
  });

  const handleChange = (name, value) => {
    setForm({...form, [name]: value});
  };

  const handleAccDetailsChange = (index, field, value) => {
    const newDetails = [...form.accDetails];
    newDetails[index][field] = value;
    handleChange('accDetails', newDetails);
  };

  const handleAddAccommodation = () => {
    handleChange('accDetails', [
      ...form.accDetails,
      {location: '', bedrooms: '', airConditioners: '', monthlyRent: ''},
    ]);
  };

  const handleAddScholarship = () => {
    handleChange('scholarships', [
      ...form.scholarships,
      {
        instituteName: '',
        scholarshipName: '',
        totalAmount: '',
        period: '',
        classLevel: '',
      },
    ]);
  };

  const handleSubmit = () => {
    const requiredFields = [
      'fullName',
      'email',
      'mobileNumber',
      'homeAddress',
      'city',
      'province',
      'postalCode',
      'tehsilAddress',
    ];
    for (let field of requiredFields) {
      if (!form[field]) {
        Alert.alert('Error', 'Please fill out all required fields');
        return;
      }
    }
    console.log(form);
  };

  const renderSection = section => {
    return (
      <View key={section.section} style={styles.section}>
        <Text style={styles.sectionTitle}>{section.section}</Text>
        {section.fields.map(field => (
          <InputField
            key={field.name}
            label={field.label}
            required={field.required}
            value={form[field.name]}
            onChangeText={text => handleChange(field.name, text)}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
        {section.subFields &&
          Object.keys(section.subFields).map(subFieldKey => (
            <View key={subFieldKey}>
              <Text style={styles.subSectionTitle}>{subFieldKey}</Text>
              {form[subFieldKey].map((subField, index) => (
                <View key={index} style={styles.subSection}>
                  {section.subFields[subFieldKey].map(subFieldConfig => (
                    <InputField
                      key={subFieldConfig.name}
                      label={subFieldConfig.label}
                      value={subField[subFieldConfig.name]}
                      onChangeText={text =>
                        handleAccDetailsChange(index, subFieldConfig.name, text)
                      }
                      type={subFieldConfig.type}
                    />
                  ))}
                </View>
              ))}
              <TouchableOpacity
                style={styles.addButton}
                onPress={
                  subFieldKey === 'accDetails'
                    ? handleAddAccommodation
                    : handleAddScholarship
                }>
                <Text style={styles.addButtonText}>Add {subFieldKey}</Text>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{padding: 10}}>
      {formFields.map(section => renderSection(section))}
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
    shadowOffset: {width: 0, height: 2},
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
  subSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: colors.secondary,
  },
  subSection: {
    marginBottom: 15,
  },
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
  addButton: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
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
