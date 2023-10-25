import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/reducer';

const store = configureStore({
  reducer: {
    userReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
