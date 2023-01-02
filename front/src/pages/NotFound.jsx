import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const ErrorContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: hsl(210, 8%, 95%);
    @media screen and (min-width: 817px) {
        flex-direction: row;
        gap: 20px;
    }
`;

const Icon = styled.p`
    display: ${(props) => (props.mobile ? "block" : "none")};
    margin-top: -100px;
    text-align: center;
    @media screen and (min-width: 641px) {
        display: ${(props) => (props.mobile ? "none" : "block")};
    }
`;

const Contents = styled.div`
    padding: 16px;
    color: #232629;
    @media screen and (min-width: 641px) {
        max-width: 460px;
    }
    h2 {
        font-size: 22px;
        margin-bottom: 8px;
        @media screen and (min-width: 641px) {
            font-size: 27px;
            font-weight: 600;
        }
        @media screen and (min-width: 817px) {
            font-size: 27px;
        }
    }
    h3 {
        margin-bottom: 18px;
        font-size: 17.6px;
        line-height: 22px;
        @media screen and (min-width: 641px) {
            margin-bottom: 19px;
            font-size: 19px;
        }
    }
    p {
        margin-bottom: 14.3px;
        font-size: 14.3px;
        @media screen and (min-width: 641px) {
            font-size: 15px;
            margin-bottom: 19px;
        }
        &:last-child {
            margin-bottom: 0;
        }
        > a {
            color: #0074cc;
        }
    }
`;

export default function NotFound() {
    return (
        <>
            <Header />
            <ErrorContainer>
                <Icon>
                    <svg width="196" height="196" viewBox="0 0 196 196">
                        <path
                            opacity=".07"
                            d="M143.05 18.44C100.21 4.5 55.18 11.8 30.5 34.5c-25 23-27.88 56.81-24 71.5 3.88 14.69 20.34 65 49.5 71s90.25 14.13 121.01-22.8c30.76-36.92 3.69-123.5-33.96-135.76Zm-35.88 14.71 58.13 100.7a9.43 9.43 0 0 1-8.17 14.15H40.87a9.43 9.43 0 0 1-8.17-14.15l58.13-100.7a9.43 9.43 0 0 1 16.34 0Z"
                        ></path>
                        <path
                            d="M111.44 41.15a7.43 7.43 0 0 0-12.88 0l-58.14 100.7A7.43 7.43 0 0 0 46.86 153h116.28c5.72 0 9.3-6.2 6.44-11.15l-58.14-100.7ZM109 126.5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0Zm-17-64a7.5 7.5 0 1 1 15 0v41a7.5 7.5 0 0 1-15 0v-41ZM58.82 39.93a3.5 3.5 0 0 0-1.4 4.74L62.49 54a3.5 3.5 0 0 0 6.15-3.35l-5.07-9.31a3.5 3.5 0 0 0-4.75-1.4ZM37.65 52.02a3.5 3.5 0 0 1 3.52-6.04L60.26 57.1a3.5 3.5 0 1 1-3.53 6.04L37.65 52.02Zm113.84 14.65a3.5 3.5 0 0 0-6.15-3.34l-5.08 9.31a3.5 3.5 0 0 0 6.15 3.35l5.08-9.32Zm21.03 2.57a3.5 3.5 0 0 1-1.26 4.78l-19.09 11.13a3.5 3.5 0 1 1-3.52-6.04l19.08-11.13a3.5 3.5 0 0 1 4.79 1.26Zm-3.32 26.28a3.5 3.5 0 0 1-3.9 3.05l-13.73-1.7a3.5 3.5 0 1 1 .86-6.95l13.72 1.7a3.5 3.5 0 0 1 3.05 3.9Zm-129.5-22a3.5 3.5 0 0 0 3.91 3.05l13.72-1.7a3.5 3.5 0 1 0-.85-6.95l-13.73 1.7a3.5 3.5 0 0 0-3.04 3.9Z"
                            opacity=".2"
                        ></path>
                        <path d="m149.37 17 4.63 4.5-4.5 4.5-4.5-4.5 4.37-4.5Zm8.92 145 9.29 9.29-9.3 9.29-9.28-9.3 9.29-9.28Zm-3.1 9.29 3.1 3.1 3.1-3.1-3.1-3.1-3.1 3.1ZM99.5 136a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Zm0-4a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Zm0-77a7.5 7.5 0 0 0-7.5 7.5v41a7.5 7.5 0 0 0 15 0v-41a7.5 7.5 0 0 0-7.5-7.5ZM96 62.5a3.5 3.5 0 1 1 7 0v41a3.5 3.5 0 1 1-7 0v-41Zm-5.17-29.35a9.43 9.43 0 0 1 16.34 0l58.13 100.7a9.43 9.43 0 0 1-8.17 14.15H40.87a9.43 9.43 0 0 1-8.17-14.15l58.13-100.7Zm12.87 2a5.43 5.43 0 0 0-9.4 0l-58.13 100.7a5.43 5.43 0 0 0 4.7 8.15h116.26c4.18 0 6.8-4.53 4.7-8.15L103.7 35.15ZM13 112a2 2 0 0 1 2 2v4h4a2 2 0 1 1 0 4h-4v4a2 2 0 1 1-4 0v-4H7a2 2 0 1 1 0-4h4v-4c0-1.1.9-2 2-2Z"></path>
                    </svg>
                </Icon>
                <Icon mobile>
                    <svg width="97" height="96" viewBox="0 0 97 96">
                        <path
                            d="M46.92 13.07a4.72 4.72 0 0 1 8.16 0l40.33 69.86A4.72 4.72 0 0 1 91.33 90H10.67a4.72 4.72 0 0 1-4.08-7.07l40.33-69.86ZM46.5 76a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0-52.5A5.5 5.5 0 0 0 41 29v24.5a5.5 5.5 0 1 0 11 0V29a5.5 5.5 0 0 0-5.5-5.5Zm47.28 24.51A2.5 2.5 0 0 1 91 50.2l-7.01-.87a2.5 2.5 0 0 1 .61-4.96l7.02.87A2.5 2.5 0 0 1 93.78 48Zm-1.96-11.78a2.5 2.5 0 1 0-2.52-4.32l-9.75 5.69a2.5 2.5 0 0 0 2.52 4.32l9.75-5.7ZM79.98 26.8a2.5 2.5 0 0 1 1 3.4l-2.59 4.76a2.5 2.5 0 0 1-4.39-2.4l2.6-4.75a2.5 2.5 0 0 1 3.38-1ZM4.3 42.19a2.5 2.5 0 0 1-.6-4.96l7-.87a2.5 2.5 0 0 1 .62 4.96l-7.01.87ZM2.58 24.8a2.5 2.5 0 0 0 .9 3.43l9.75 5.69a2.5 2.5 0 1 0 2.52-4.32L6 23.9a2.5 2.5 0 0 0-3.42.9Zm11.74-2.6a2.5 2.5 0 1 1 4.39-2.4l2.6 4.77a2.5 2.5 0 1 1-4.4 2.39l-2.6-4.76Z"
                            opacity=".2"
                        ></path>
                        <path d="M46.5 76a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0-3a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0-49.5A5.5 5.5 0 0 0 41 29v24.5a5.5 5.5 0 1 0 11 0V29a5.5 5.5 0 0 0-5.5-5.5ZM44 29a2.5 2.5 0 0 1 5 0v24.5a2.5 2.5 0 0 1-5 0V29ZM41.13 8.24a6.22 6.22 0 0 1 10.74 0l39.3 67.41A6.22 6.22 0 0 1 85.78 85H7.21c-4.8 0-7.79-5.2-5.37-9.35L41.13 8.24Zm8.15 1.5a3.22 3.22 0 0 0-5.56 0L4.42 77.18A3.22 3.22 0 0 0 7.22 82H85.8c2.48 0 4.03-2.7 2.78-4.83L49.27 9.75Z"></path>
                    </svg>
                </Icon>
                <Contents>
                    <h2>Page not found</h2>
                    <h3>
                        We're sorry, we couldn't find the page you requested.
                    </h3>
                    <p>
                        Try <a href="/">searching for similar questions</a>
                    </p>
                    <p>
                        Browse our <a href="/">recent questions</a>
                    </p>
                    <p>
                        Browse our <a href="/tags">popular tags</a>
                    </p>
                    <p>
                        If you feel something is missing that should be here,{" "}
                        <a href="/">contact us.</a>
                    </p>
                </Contents>
            </ErrorContainer>
        </>
    );
}
