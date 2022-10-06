import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CommonState from '../types/Common';

const initialState: CommonState = {
    loading: false,
    error: null,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loading: action.payload,
    }),
    setError: (state, action: PayloadAction<string | null>) => ({
        ...state,
        error: action.payload,
    }),
  },
});
export const actions = commonSlice.actions;
export default commonSlice.reducer;