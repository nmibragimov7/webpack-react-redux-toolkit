import { createSlice } from '@reduxjs/toolkit';

import { UserScheme } from '../type/UserScheme';

const initialState: UserScheme = {
    authData: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
