import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UserProfile = {
  id: number;
  email: string;
  name: string;
  phone: string;
  cpf: string;
};

export type UserDetails = {
  accessToken?: string;
  user?: UserProfile;
  admin: boolean;
};

const userState: UserDetails = {
  accessToken: undefined,
  user: undefined,
  admin: false,
};

const slice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    authUser: (state, action: PayloadAction<UserDetails>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    adminRole: (state, action: PayloadAction<boolean>) => {
      state.admin = action.payload;
    },
    setUser: (state, action: PayloadAction<UserProfile>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
      state.admin = false;
    },
  },
});

export const { authUser, adminRole, setUser, clearUser } = slice.actions;

export default slice.reducer;
