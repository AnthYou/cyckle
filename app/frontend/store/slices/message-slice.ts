import { createSlice } from "@reduxjs/toolkit";

interface MessageState {
  message: string | null;
}

const initialMessageState: MessageState = {
  message: null
};

const messageSlice = createSlice({
  name: "message",
  initialState: initialMessageState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    clearMessage(state) {
      state.message = null;
    }
  },
});

export const messageActions = messageSlice.actions;

export default messageSlice.reducer;
