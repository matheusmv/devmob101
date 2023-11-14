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
};

const userState: UserDetails = {
  accessToken: undefined,
  user: undefined,
};

const slice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    authUser: (state, action: PayloadAction<UserDetails>) => {
      state.user = action.payload.user;
    },
  },
});

export const { authUser } = slice.actions;

export default slice.reducer;
