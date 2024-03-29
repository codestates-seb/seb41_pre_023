import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    margin: 0 16px;
    width: 100%;
    height: 100%;
    background: white;
    border: 1px solid hsl(210deg 8% 85%);
    border-radius: 3px;
    color: #232629;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
        0 2px 8px hsla(0, 0%, 0%, 0.05);
    @media (max-width: 1100px) {
        display: none;
    }
`;

const CardTitle = styled.div`
    padding: 16px;
    height: 45px;
    background: hsl(210deg 8% 98%);
    border-bottom: 1px solid hsl(210deg 8% 85%);
    font-size: 15px;
`;

const CardBody = styled.div`
    display: flex;
    flex: 1 auto;
    padding: 16px;
    font-size: 12px;
    div {
        margin: 0 8px;
    }
`;

const CardText = styled.div`
    p {
        line-height: 18px;
        margin: 0 0 12px;
    }
`;

const TitleCard = function Card({ titleCardOpen }) {
    return (
        <CardContainer style={titleCardOpen}>
            <CardTitle>Writing a good title</CardTitle>
            <CardBody>
                <div>
                    <svg
                        aria-hidden="true"
                        className="svg-spot spotPencil"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                    >
                        <path
                            opacity=".2"
                            d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                        />
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z" />
                    </svg>
                </div>
                <CardText>
                    <p>Your title should summarize the problem.</p>
                    <p>
                        You might find that you have a better idea of your title
                        after writing out the rest of the question.
                    </p>
                </CardText>
            </CardBody>
        </CardContainer>
    );
};

export const FirstBodyCard = function Card({ firstBodyCardOpen }) {
    return (
        <CardContainer style={firstBodyCardOpen}>
            <CardTitle>Introduce the problem</CardTitle>
            <CardBody>
                <div>
                    <svg
                        aria-hidden="true"
                        className="svg-spot spotPencil"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                    >
                        <path
                            opacity=".2"
                            d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                        />
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z" />
                    </svg>
                </div>
                <CardText>
                    <p>
                        Explain how you encountered the problem you’re trying to
                        solve, and any difficulties that have prevented you from
                        solving it yourself.
                    </p>
                </CardText>
            </CardBody>
        </CardContainer>
    );
};

export const SecondBodyCard = function Card({ secondBodyCardOpen }) {
    return (
        <CardContainer style={secondBodyCardOpen}>
            <CardTitle>Expand on the problem</CardTitle>
            <CardBody>
                <div>
                    <svg
                        aria-hidden="true"
                        className="svg-spot spotPencil"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                    >
                        <path
                            opacity=".2"
                            d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                        />
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z" />
                    </svg>
                </div>
                <CardText>
                    <p>
                        Show what you’ve tried, tell us what happened, and why
                        it didn’t meet your needs.
                    </p>
                    <p>
                        Not all questions benefit from including code, but if
                        your problem is better understood with code you’ve
                        written, you should include a minimal, reproducible
                        example.
                    </p>
                    <p>
                        Please make sure to post code and errors as text
                        directly to the question (and not as images), and format
                        them appropriately.
                    </p>
                </CardText>
            </CardBody>
        </CardContainer>
    );
};

export default TitleCard;
