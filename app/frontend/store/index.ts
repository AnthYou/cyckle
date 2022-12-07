import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";

const store = configureStore({
  reducer: { auth: authReducer }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
