import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import scholarshipReducer from './slices/scholarshipSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    scholarships: scholarshipReducer,
  },
});
