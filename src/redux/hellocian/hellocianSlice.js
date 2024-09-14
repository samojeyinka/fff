import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentHellocian: null,
  loading: false,
  error: false,
};

const hellocianSlice = createSlice({
  name: 'hellocian',
  initialState,
  reducers: {
    signHellocianStart: (state) => {
      state.loading = true;
    },
    signHellocianSuccess: (state, action) => {
      state.currentHellocian = action.payload;
      state.loading = false;
      state.error = false;
    },
    signHellocianFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateHellocianStart: (state) => {
      state.loading = true;
    },
    updateHellocianSuccess: (state, action) => {
      state.currentHellocian = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateHellocianFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  },
});

export const {
  signHellocianStart,
  signHellocianSuccess,
  signHellocianFailure,
  updateHellocianStart,
  updateHellocianSuccess,
  updateHellocianFailure,

} = hellocianSlice.actions;

export default hellocianSlice.reducer;