import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface Profile {
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  profile: null | Profile;
  pending: boolean;
}

const initialState: AuthState = {
  profile: null,
  pending: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuthState: (state, action: PayloadAction<AuthState>) => {
      state.profile = action.payload.profile;
      state.pending = action.payload.pending;
    },
  },
});

export const { updateAuthState } = authSlice.actions;

export const getAuthState = createSelector(
  (state: RootState) => state.auth,
  (authState) => authState
);

export default authSlice.reducer;
