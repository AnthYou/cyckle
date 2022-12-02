import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
