import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import CustomTextInput from '../../components/TextInput';
import Button from '../../components/Button';
import styles from './styles'; // Import styles from styles.js
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [qualification, setQualification] = useState('');
    const [department, setDepartment] = useState('');
    const [degreeTitle, setDegreeTitle] = useState('');
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [showPicker, setShowPicker] = useState(false);
    const [profileImage, setProfileImage] = useState(null); // State to store profile image
    const [modalVisible, setModalVisible] = useState(false);

    const showMode = (currentMode) => {
        setShowPicker(true);
        setMode(currentMode);
    };

    const hideDialog = () => setModalVisible(false);

    const handleImageUpdate = () => {
        setModalVisible(true);
    };

    const updateProfileImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then(image => {
          
            setProfileImage(image.path);
            setModalVisible(false);
           
        }).catch(error => {
            console.log(error);
            setModalVisible(false);
        });
    };

    const handleSubmit = () => {
        // Validation logic goes here
        if (firstName.trim() === '') {
            alert('Please enter your first name');
            return;
        }
        // Add more validation logic for other fields as needed

        // If all validation passes, proceed with submission
        console.log('Form submitted!');
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPicker(false); // Changed show to showPicker
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let day = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        console.log(day);
    };

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
               
                <View style={{
                    paddingBottom: 20,
                    marginBottom: 30
                }}>
                    <TouchableOpacity onPress={()=>{
                            setModalVisible(true);
                        }}>
                        <>
                            {profileImage ? (
                                <Image source={{ uri: profileImage }} style={styles.profileImage}  />
                            ) : (
                                    <Image
                                        source={require('../../assets/images/profile.jpg')}
                                        style={styles.profileImage}
                                    />
                                )}
                        </>
                    </TouchableOpacity>
                    <Text style={styles.header}>Edit Profile</Text>
                    <CustomTextInput label={'First Name'} value={firstName} onChangeText={setFirstName} />
                    <CustomTextInput label={'Last Name'} value={lastName} onChangeText={setLastName} />
                    <CustomTextInput label={'Gender'} value={gender} onChangeText={setGender} />

                    {/* Conditionally render text based on whether a date is selected */}
                    {date ? (
                        <Text style={styles.input} onPress={() => setShowPicker(true)}>
                            {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                        </Text>
                    ) : (
                            <Text style={styles.input} onPress={() => setShowPicker(true)}>
                                DOB  12/4/2024 (Static Date)
                            </Text>
                        )}

                    {showPicker && (
                        <DateTimePicker value={date} mode={mode} display='default' onChange={onChange} />
                    )}

                    <CustomTextInput label={'Address'} value={address} onChangeText={setAddress} />
                    <CustomTextInput label={'Department '} value={department} onChangeText={setDepartment} />
                    <CustomTextInput label={'Qualification'} value={qualification} onChangeText={setQualification} />

                    <CustomTextInput label={'Degree Title'} value={degreeTitle} onChangeText={setDegreeTitle} />

                    <Button text='Update Profile' onPress={handleSubmit} />
                </View>
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <>
                            <Text style={styles.modalButton} onPress={updateProfileImage}> Update Profile</Text>
                            <Text style={styles.modalButton} onPress={hideDialog}> View Profile</Text>
                        </>
                      
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default EditProfile;
