import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import { ToastAndroid } from 'react-native';

// Async thunk to handle the application process
export const applyForScholarship = createAsyncThunk(
  'applications/applyForScholarship',
  async ({ form, userId }) => {
    try {
      const applicationRef = firestore().collection('applications').doc();
      await applicationRef.set({ ...form, userId });

      const scholarshipRef = firestore()
        .collection('scholarships')
        .doc(form.scholarshipId);
      await scholarshipRef.update({
        applicationsCount: firestore.FieldValue.increment(1),
      });
      ToastAndroid.show(
        'Application submitted successfully',
        ToastAndroid.SHORT,
      );
      return { id: applicationRef.id, ...form };
    } catch (error) {
      console.log('error from slice', error.message);
      throw new Error(error.message);
    }
  },
);

// Async thunk to fetch the applied scholarships of the current user
export const fetchYourApplications = createAsyncThunk(
  'applications/fetchYourApplications',
  async (userId, { rejectWithValue }) => {
    try {
      const snapshot = await firestore()
        .collection('applications')
        .where('userId', '==', userId)
        .get();
      const applications = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log('Fetched Applications:', applications);
      return applications;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);


const applicationsSlice = createSlice({
  name: 'applications',
  initialState: {
    applications: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(applyForScholarship.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(applyForScholarship.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.applications.push(action.payload);
      })
      .addCase(applyForScholarship.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchYourApplications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchYourApplications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.applications = action.payload;
      })
      .addCase(fetchYourApplications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default applicationsSlice.reducer;
