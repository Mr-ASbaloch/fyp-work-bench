import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
} from 'react-native';
import InputField from '../../formFields/inputfields';
import {colors} from '../../utils/styles';
import formFields from '../../formFields/formFields';
import {applyForScholarship} from '../../store/slices/applicationsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';

const PersonalData = ({route}) => {
  const {scholarship} = route?.params;
  const scholarshipId = scholarship?.id;
  const userId = useSelector(state => state?.auth?.user?.id);
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
    documentUrl: '',
  });
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = phone => {
    const phoneRegex = /^[0-9]{10,11}$/; // Allow only digits, 10 to 15 in length
    return phoneRegex.test(phone);
  };

  const validateCGPA = cgpa => {
    const cgpaRegex = /^\d+(\.\d{1,2})?$/; // Allow numbers with up to two decimal places
    return cgpaRegex.test(cgpa) && parseFloat(cgpa) <= 4.0; // Assuming CGPA scale is out of 4.0
  };

  const handleChange = (name, value) => {
    setForm({...form, [name]: value});
  };

  const handleDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setDocument(result[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.log('DocumentPicker Error: ', err);
      }
    }
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
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'All fields are required',
        });
        return;
      }
    }

    if (!validateEmail(form.email)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter a valid email address',
      });
      return;
    }
    if (!validatePhoneNumber(form.mobileNumber)) {
      console.log('Invalid mobile number:', form.mobileNumber);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter a valid mobile number',
      });
      return;
    }

    if (
      form.otherMobileNumber &&
      !validatePhoneNumber(form.otherMobileNumber)
    ) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter a valid other mobile number (10-15 digits)',
      });
      return;
    }

    if (!validateCGPA(form.currentCGPA)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter a valid CGPA (max 4.0)',
      });
      return;
    }

    if (!document) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please upload a document',
      });
      return;
    }

    // Check degree level
    const degreeProgram = form.degreeProgram;
    const degreeLevel = scholarship.degreeLevel; // Assuming the degree level of the scholarship is stored in this key

    const degreeMap = {
      Bachelors: 'BS',
      Masters: 'MS',
      PhD: 'PhD',
    };

    if (degreeLevel !== 'All' && degreeMap[degreeProgram] !== degreeLevel) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `This scholarship is for ${degreeLevel} students only`,
      });
      return;
    }

    setLoading(true);

    try {
      // Upload document to Firestore Storage
      const documentUri = document.uri;
      const documentRef = storage().ref(
        `applications/${userId}/${document.name}`,
      );
      await documentRef.putFile(documentUri);
      const documentUrl = await documentRef.getDownloadURL();

      // Update form with document URL
      const filteredForm = {
        ...form,
        documentUrl,
      };

      await dispatch(applyForScholarship({form: filteredForm, userId}));
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Application submitted successfully',
      });
      navigation.goBack();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to submit application',
      });
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
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
            options={field.options}
          />
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {formFields.map(renderSection)}
      <View style={styles.documentContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDocumentPicker}>
          <Text style={styles.buttonText}>Upload PDF</Text>
        </TouchableOpacity>
        <Text>
          Upload one document file contaning the following Documents Id card
          (frontend back), inter marks sheet/Degree, your CV
        </Text>
        {document && (
          <View style={styles.documentPreview}>
            <Text style={styles.documentName}>{document.name}</Text>
            <TouchableOpacity onPress={() => setDocument(null)}>
              <Text style={styles.removeDocument}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? `Submitting` : `Submit`}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  documentContainer: {
    marginBottom: 24,
  },
  button: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  documentPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
  },
  documentName: {
    fontSize: 16,
    color: '#333',
  },
  removeDocument: {
    color: 'red',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default PersonalData;
