import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Gender = "male" | "female" | "non-binary";

export interface User {
  id: number;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  height: number;
  address?: string;
  city?: string;
}

export interface AuthState {
  currentUser: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

const initialAuthState: AuthState = {
  currentUser: null,
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action: PayloadAction<{token: string, currentUser: User}>) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.currentUser = action.payload.currentUser;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.currentUser = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
