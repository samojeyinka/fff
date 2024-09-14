import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentChat: null,
  loading: false,
  error: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    chatStart: (state) => {
      state.loading = true;
    },
    chatSuccess: (state, action) => {
      state.currentChat = action.payload;
      state.loading = false;
      state.error = false;
    },
    chatFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateChat: (state) => {
      state.loading = true;
    },
    updateChatSuccess: (state, action) => {
      state.currentChat = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateChatFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  },
});

export const {
  chatStart,
  chatSuccess,
  chatFailure,
  updateChat,
  updateChatSuccess,
  updateChatFailure

} = chatSlice.actions;

export default chatSlice.reducer;