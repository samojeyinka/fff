import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentOrder: null,
  loading: false,
  error: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderPackageStart: (state) => {
      state.loading = true;
    },
    orderPackageSuccess: (state, action) => {
      state.currentOrder = action.payload;
      state.loading = false;
      state.error = false;
    },
    orderPackageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateOrderStart: (state) => {
      state.loading = true;
    },
    updateOrderSuccess: (state, action) => {
      state.currentOrder = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateOrderFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  },
});

export const {
  orderPackageStart,
  orderPackageSuccess,
  orderPackageFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure
} = orderSlice.actions;

export default orderSlice.reducer;