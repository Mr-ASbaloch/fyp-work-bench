// import {createSlice} from '@reduxjs/toolkit';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import {db} from '../../config/firebase';
// import {ToastAndroid} from 'react-native';

// const initialState = {
//   user: null,
//   isLoading: false,
//   error: null,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//       state.error = null;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//       state.isLoading = false;
//     },
//   },
// });

// export const {setUser, setLoading, setError} = authSlice.actions;

// // Initialize Auth Listener
// export const initializeAuth = () => async dispatch => {
//   dispatch(setLoading(true));
//   auth().onAuthStateChanged(async user => {
//     if (user) {
//       try {
//         const userDoc = await db().collection('students').doc(user.uid).get();
//         if (userDoc.exists) {
//           dispatch(setUser(userDoc.data()));
//         }
//       } catch (error) {
//         dispatch(setError(error.message));
//       }
//     } else {
//       dispatch(setUser(null));
//     }
//     dispatch(setLoading(false));
//   });
// };

// // SignUp
// export const registerUser =
//   ({displayName, email, password, phoneNumber}) =>
//   async dispatch => {
//     dispatch(setLoading(true));
//     console.log(displayName, email, password, phoneNumber);
//     if (!displayName || !email || !password || !phoneNumber) {
//       ToastAndroid.show(
//         'Please fill your all required fields',
//         ToastAndroid.SHORT,
//       );
//       dispatch(setLoading(false));
//       return;
//     }
//     try {
//       await auth().createUserWithEmailAndPassword(email, password);
//       auth().currentUser?.updateProfile({
//         displayName: displayName,
//       });
//       await db().collection('students').doc(auth().currentUser?.uid).set({
//         displayName: displayName,
//         email: email,
//         phoneNumber: phoneNumber,
//         role: 'student',
//         id: auth().currentUser?.uid,
//       });
//       dispatch(
//         setUser({
//           displayName: displayName,
//           email: email,
//           phoneNumber: phoneNumber,
//           role: 'student',
//           id: auth().currentUser?.uid,
//         }),
//       );
//       ToastAndroid.show('User registered successfully!', ToastAndroid.SHORT);
//     } catch (error) {
//       if (error.code === 'auth/email-already-in-use') {
//         ToastAndroid.show('This email is already in use', ToastAndroid.SHORT);
//       }
//       if (error.code === 'auth/invalid-email') {
//         ToastAndroid.show('This email is invalid', ToastAndroid.SHORT);
//       }
//       if (error.code === 'auth/weak-password') {
//         ToastAndroid.show('Password is too weak', ToastAndroid.SHORT);
//       }
//       console.log('Error', error.message);
//       dispatch(setError(error.message));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

// export const loginUser =
//   ({email, password}) =>
//   async dispatch => {
//     dispatch(setLoading(true));
//     try {
//       if (!email || !password) {
//         ToastAndroid.show(
//           'Please enter your email and password correctly',
//           ToastAndroid.SHORT,
//         );
//         dispatch(setLoading(false));
//         return;
//       }
//       await auth().signInWithEmailAndPassword(email, password);
//       const currentUser = auth().currentUser;
//       if (currentUser) {
//         const userDoc = await db()
//           .collection('students')
//           .doc(currentUser.uid)
//           .get();
//         if (userDoc.exists) {
//           dispatch(setUser(userDoc.data()));
//         }
//         ToastAndroid.show('User logged in!', ToastAndroid.SHORT);
//       }
//     } catch (error) {
//       if (error.code === 'auth/user-not-found') {
//         ToastAndroid.show('User not found', ToastAndroid.SHORT);
//       }
//       if (error.code === 'auth/wrong-password') {
//         ToastAndroid.show('Invalid password', ToastAndroid.SHORT);
//       }
//       if (error.code === 'auth/invalid-email') {
//         ToastAndroid.show('Invalid email', ToastAndroid.SHORT);
//       }
//       ToastAndroid.show('Login failed', ToastAndroid.SHORT);
//       dispatch(setError(error.message));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

// export default authSlice.reducer;



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
      ToastAndroid.show('Profile updated successfully!', ToastAndroid.SHORT);
    }
  } catch (error) {
    ToastAndroid.show('Failed to update profile', ToastAndroid.SHORT);
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
        ToastAndroid.show(
          'Please fill your all required fields',
          ToastAndroid.SHORT,
        );
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
        ToastAndroid.show('User registered successfully!', ToastAndroid.SHORT);
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          ToastAndroid.show('This email is already in use', ToastAndroid.SHORT);
        }
        if (error.code === 'auth/invalid-email') {
          ToastAndroid.show('This email is invalid', ToastAndroid.SHORT);
        }
        if (error.code === 'auth/weak-password') {
          ToastAndroid.show('Password is too weak', ToastAndroid.SHORT);
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
          ToastAndroid.show(
            'Please enter your email and password correctly',
            ToastAndroid.SHORT,
          );
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
          ToastAndroid.show('User logged in!', ToastAndroid.SHORT);
        }
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          ToastAndroid.show('User not found', ToastAndroid.SHORT);
        }
        if (error.code === 'auth/wrong-password') {
          ToastAndroid.show('Invalid password', ToastAndroid.SHORT);
        }
        if (error.code === 'auth/invalid-email') {
          ToastAndroid.show('Invalid email', ToastAndroid.SHORT);
        }
        ToastAndroid.show('Login failed', ToastAndroid.SHORT);
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

export default authSlice.reducer;
