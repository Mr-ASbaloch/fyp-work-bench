import Toast from 'react-native-toast-message'

import { createSlice } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { db } from '../../config/firebase';
import { ToastAndroid } from 'react-native';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setUser, setLoading, setError } = authSlice.actions;

export const initializeAuth = () => async dispatch => {
  dispatch(setLoading(true));
  auth().onAuthStateChanged(async user => {
    if (user) {
      try {
        const userDoc = await db().collection('students').doc(user.uid).get();
        if (userDoc.exists) {
          dispatch(setUser(userDoc.data()));
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
    } else {
      dispatch(setUser(null));
    }
    dispatch(setLoading(false));
  });
};

export const editProfile = (profileData) => async dispatch => {
  dispatch(setLoading(true));
  const userId = auth().currentUser?.uid;

  try {
    if (userId) {
      let profileImageUrl = profileData.profileImage;

      // If a new profile image is selected, upload it to Firebase Storage
      if (profileData.profileImage && !profileData.profileImage.startsWith('http')) {
        const reference = storage().ref(`profileImages/${userId}`);
        await reference.putFile(profileData.profileImage);
        profileImageUrl = await reference.getDownloadURL();
      }

      const updatedProfileData = { ...profileData, profileImage: profileImageUrl };

      await db().collection('students').doc(userId).update(updatedProfileData);
      dispatch(setUser({ ...updatedProfileData, id: userId }));
      Toast.show({
        type: 'success',
        text1: 'Profile updated successfully!',
      });
    }
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Profile update failed!',
    });
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const registerUser =
  ({ displayName, email, password, phoneNumber }) =>
    async dispatch => {
      dispatch(setLoading(true));
      console.log(displayName, email, password, phoneNumber);
      if (!displayName || !email || !password || !phoneNumber) {
        Toast.show({
          type: 'error',
          text1: 'Please fill your all required fields',
        });
        dispatch(setLoading(false));
        return;
      }
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        auth().currentUser?.updateProfile({
          displayName: displayName,
        });
        await db().collection('students').doc(auth().currentUser?.uid).set({
          displayName: displayName,
          email: email,
          phoneNumber: phoneNumber,
          role: 'student',
          id: auth().currentUser?.uid,
        });
        dispatch(
          setUser({
            displayName: displayName,
            email: email,
            phoneNumber: phoneNumber,
            role: 'student',
            id: auth().currentUser?.uid,
          }),
        );
        Toast.show({
          type: 'success',
          text1: 'User registered successfully!',
        });
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            type: 'error',
            text1: 'This email is already in use',
          });
        }
        if (error.code === 'auth/invalid-email') {
          Toast.show({
            type: 'error',
            text1: 'This email is invalid',
          });
        }
        if (error.code === 'auth/weak-password') {
          Toast.show({
            type: 'success',
            text1: 'Password is too weak',
          });
        }
        console.log('Error', error.message);
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

export const loginUser =
  ({ email, password }) =>
    async dispatch => {
      dispatch(setLoading(true));
      try {
        if (!email || !password) {
          Toast.show({
            type: 'error',
            text1: 'Please enter your email and password correctly',
          });
          dispatch(setLoading(false));
          return;
        }
        await auth().signInWithEmailAndPassword(email, password);
        const currentUser = auth().currentUser;
        if (currentUser) {
          const userDoc = await db()
            .collection('students')
            .doc(currentUser.uid)
            .get();
          if (userDoc.exists) {
            dispatch(setUser(userDoc.data()));
          }
          Toast.show({
            type: 'success',
            text1: 'User logged in successfully',
          });
        }
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          Toast.show({
            type: 'error',
            text1: 'User not found',
          });
        }
        if (error.code === 'auth/wrong-password') {
          Toast.show({
            type: 'error',
            text1: 'Invalid password',
          });
        }
        if (error.code === 'auth/invalid-email') {
          Toast.show({
            type: 'error',
            text1: 'Invalid email',
          });
        }
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
        });
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

export default authSlice.reducer;
