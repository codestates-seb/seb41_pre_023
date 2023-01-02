import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("accessToken");

//초기값은 비로그인 상태
const initialState = {
    isLogin: !!initialToken, //뒤에 나오는 값이 참인지 거짓인지 판별해주는 연산자 !!
    accessToken: initialToken,
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
