// scholarshipSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {db} from '../../config/firebase';
export const fetchScholarships = createAsyncThunk(
  'scholarships/fetchScholarships',
  async () => {
    try {
      const snapshot = await db().collection('scholarships').get();
      const scholarships = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(scholarships);
      return scholarships;
    } catch (error) {
      console.error(error.message, 'Error fetching scholarships');
    }
  },
);

const scholarshipSlice = createSlice({
  name: 'scholarships',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchScholarships.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchScholarships.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchScholarships.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default scholarshipSlice.reducer;
