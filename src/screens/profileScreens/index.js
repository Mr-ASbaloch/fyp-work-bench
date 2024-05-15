import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { colors } from '../../utils/styles';
import ImagePicker from 'react-native-image-crop-picker';
import CustomModal from '../../components/Modal';
import TermsOfUse from '../TermsConditions';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';
import BasicInfoButton from '../../components/basicInfo';
const ProfileScreen = () => {
  const navigation = useNavigation();

  const [profileImage, setProfileImage] = useState(null);
  // State to store profile image
  const [CoverImage, setCoverImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [CustomVisibleModal, setCustomVisibleModal] = useState(false);

  const hideDialog = () => setModalVisible(false);

  const openModal = () => {
    setCustomVisibleModal(true);
  };

  const closeModal = () => {
    setCustomVisibleModal(false);
  };

  const updateProfileImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        setProfileImage(image.path);
        setModalVisible(false);
      })
      .catch(error => {
        console.log(error);
        setModalVisible(false);
      });
  };

  const updateCoverImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        setCoverImage(image.path);
        setModalVisible(false);
      })
      .catch(error => {
        console.log(error);
        setModalVisible(false);
      });
  };

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() =>
        ToastAndroid.show('Signed out successfully', ToastAndroid.SHORT),
      );
  };
  return (
    <View style={styles.container}>
      {/* Profile Cover Image */}
      <TouchableOpacity
      // onPress={() => {
      //   setModalVisible(true);
      // }}
      >
        <>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.coverImage} />
          ) : (
            <Image
              source={require('../../assets/images/profile.jpg')}
              style={styles.coverImage}
            />
          )}
        </>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          // backgroundColor: 'red',
          position: 'absolute',
          top: '10%',
          width: 40,
          height: 40,
          right: '10%',
          // bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 8,
          borderRadius: 50,
          borderColor: 'white',
          borderWidth: 1,
        }}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Image
          style={{
            height: 26,
            width: 26,
            tintColor: colors.common,
            // backgroundColor: 'white',
          }}
          source={require('../../assets/icons/edit.png')}
        />
      </TouchableOpacity>

      {/* Profile Image */}

      <View style={styles.profileImageContainer}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={styles.profileImage}
              />
            )}
          </>
        </TouchableOpacity>
        {/* Edit button on profile image  styles.editProfileImageButton */}

        {/* Edit button on profile image */}

        <Text style={styles.name}> Abdul Saeed</Text>

        <Text style={styles.infoText}>Department: Software Engineering</Text>
      </View>

      {/* Basic Information Card */}

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <BasicInfoButton source={require('../../assets/icons/setting.png')} buttonText={'Settings'} onPress={() => {
          navigation.navigate('Setting')
        }} />
        <BasicInfoButton source={require('../../assets/icons/edit.png')} buttonText={'Edit Profile'} onPress={() => { navigation.navigate('editProfile') }} />
        <BasicInfoButton     source={require('../../assets/icons/notification.png')} buttonText={'Notifications'} onPress={() => {
          navigation.navigate('Notification')
        }} />


    
      </View>

      {/* Sign Out Button */}

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <>
              <Text
                style={styles.modalButton}
                onPress={() => {
                  navigation.navigate('editProfile');
                }}>
                {' '}
                Update Profile
              </Text>
              <Text style={styles.modalButton} onPress={hideDialog}>
                {' '}
                View Profile
              </Text>
            </>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverImage: {
    width: '100%',
    height: 150,
    opacity: 0.7,
    resizeMode: 'cover',
    position: 'relative',
  },
  profileImageContainer: {
    // position: 'absolute',
    // top: 150,
    // left: '15%',
    // marginTop: -50,
    // position: 'relative',
    // backgroundColor: 'white',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: colors.common,
    borderWidth: 1,
    alignSelf: 'center',
    // position: 'relative',//
    backgroundColor: 'white',
    marginTop: -50,
    //padding:15
  },
  editProfileImageButton: {
    // backgroundColor: 'grey',
    // padding: 5,
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    top: 0,
    height: 45,
    width: 45,
    borderColor: 'white',
    borderWidth: 1,

    //tintColor: colors.common
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.common,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    // marginBottom: 10,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'black',
  },
  editButton: {
    borderRadius: 50,
    //position: 'absolute',
    // top: 10,
    //right: 50,
    height: 30,
    width: 30,
    marginRight: 15,
    alignSelf: 'center',
    // tintColor: colors.common
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 20,
    backgroundColor: 'white',
    padding: 15,
    marginTop: 50,
    width: '100%',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    // borderTopEndRadius:50,
    // borderBottomEndRadius:50,
  },
  buttonText: {
    color: colors.common,
    fontWeight: 'bold',
  },
  signOutButton: {
    backgroundColor: colors.common,
    // marginHorizontal: 50,
    paddingVertical: 15,
    // borderRadius: 5,
    alignItems: 'center',
    display: 'flex',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    width: '50%',
    borderTopEndRadius: 50,
    borderBottomEndRadius: 50,
  },
  signOutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    height: 'auto',
  },
  modalButton: {
    backgroundColor: colors.common,
    padding: 7,
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    width: '50%',
    alignSelf: 'center',
    paddingVertical: 8,
  },
});

export default ProfileScreen;
