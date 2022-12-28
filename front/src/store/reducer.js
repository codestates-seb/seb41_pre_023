import { configureStore, createSlice } from "@reduxjs/toolkit";

//초기값은 비로그인 상태
const initialState = {
    isLogin: false,
};

//action + reducer 생성
const LoginState = createSlice({
    name: "loginstate",
    initialState,
    reducers: {
        login: (state) => {
            state.isLogin = true;
        },
        logout: (state) => {
            state.isLogin = false;
        },
    },
});

//store 생성
const store = configureStore({
    reducer: LoginState.reducer,
});

export const { login, logout } = LoginState.actions;

export default store;
