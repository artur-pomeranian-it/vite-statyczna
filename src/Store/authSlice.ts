import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './';

// Define a type for the slice state
interface AuthData {
  userEmail: string;
  isLoogedIn: boolean;
}

// Define the initial state using that type
const initialState: AuthData = {
  userEmail: '',
  isLoogedIn: false,
};

export const authSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<string | null>) => {
      state.userEmail = action.payload || 'unknown email';
      state.isLoogedIn = true;
    },
  },
});

export const { userLogin } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserEmail = (state: RootState) => state.auth.userEmail;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoogedIn;

export default authSlice.reducer;
