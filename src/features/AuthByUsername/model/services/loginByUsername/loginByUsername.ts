import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkApi.rejectWithValue('error');
        }
    },
);
