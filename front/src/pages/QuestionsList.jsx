import React, { useCallback, useEffect } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import useScrollTop from "../util/useScrollTop";
import { useState } from "react";

import LeftSidebar from "../components/LeftSidebar";
import Questions from "./Questions";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

const Container = styled.div`
    //메인 전체창 AQ,LS,RS
    max-width: 1264px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    height: auto;
    max-height: 3000px;
    min-height: 1000px;
    max-width: 1100px;
`;

const QuestionsAll = styled.div`
    //AQ, RS
    height: auto;
    max-height: 3000px;
    min-height: 1000px;
    border-left: 1px;
    border: 1px solid hsl(210deg 8% 85%);
    background: white;
    padding: 74px 0px 24px 24px;
    width: calc(100% - 164px);
`;

const QuestionMain = styled.div`
    //질문 보여줄 곳

    float: left;
    width: 100%; // 메인 길이조절
    background-color: white;
`;

const MainTopBar = styled.div`
    display: flex;
    height: 100px;
`;
const Title = styled.h1`
    font-size: 27px;
    flex: 1 auto;
    margin: 0 0 1em;
    height: 35px;
`;

const MainTopButton = styled.button`
    background-color: ${(props) => props.BgColor};
    margin: 0 24px 0 12px;
    padding: 8px 10px;
    border: 1px solid transparent;
    height: 39px;
    min-width: 58px;
    width: 102px;
    padding: 10px;
    border-color: ${(props) => props.BoColor};
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4); // 안쪽에주는 명암
    color: ${(props) => props.Color};
    display: inline-block; // ?
    line-height: 17px; // 라인 테두리?
    cursor: pointer; //버튼 불들어옴
    word-break: break-all; //글씨 안넘치게함
`;

export default function QuestionsList() {
    const isLogin = useSelector((state) => state.isLogin);
    const navigate = useNavigate();
    useScrollTop();

    const [questionsList, setQuestionsList] = useState([]);

    const handleList = async () => {
        try {
            await axios
                .get("http://pre-23.herokuapp.com/question?page=1&size=100")
                .then((res) => {
                    setQuestionsList(res.data.data);
                });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleList();
    }, []);

    const handleRegisterClick = useCallback(() => {
        if (isLogin) {
            navigate("/register");
        } else {
            navigate("/login");
        }
    }, [isLogin, navigate]);

    return (
        <>
            <Container>
                <LeftSidebar />
                <QuestionsAll>
                    <QuestionMain>
                        <MainTopBar>
                            <Title>All Questions</Title>
                            <MainTopButton
                                onClick={handleRegisterClick}
                                BgColor="hsl(206deg 100% 52%)"
                                Color="hsl(0deg 0% 100%)"
                                BoColor="hsl(204, 41%, 63%)"
                            >
                                Ask Question
                            </MainTopButton>
                        </MainTopBar>
                        <Questions questionList={questionsList}></Questions>
                    </QuestionMain>
                </QuestionsAll>
            </Container>
            <Footer />
        </>
    );
}
