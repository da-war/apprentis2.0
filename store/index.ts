//configure store
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const reducers = combineReducers({
  auth: authSlice,
  message: authSlice,
});

const store = configureStore({ reducer: reducers });
export type RootState = ReturnType<typeof store.getState>;

export default store;
