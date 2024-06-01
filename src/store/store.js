import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import scholarshipReducer from './slices/scholarshipSlice';
import applicationsReducer from './slices/applicationsSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    scholarships: scholarshipReducer,
    applications: applicationsReducer,
  },
});
