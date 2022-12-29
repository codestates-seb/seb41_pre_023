import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import useScrollTop from "../util/useScrollTop";

import LeftSidebar from "../components/LeftSidebar";
import Questions from "./Questions";
import styled from "styled-components";

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
    padding: 74px 24px 24px 24px;
    width: calc(100% - 164px);
`;

const QuestionMain = styled.div`
    //질문 보여줄 곳

    float: left;
    width: calc(100% - 320px); // 메인 길이조절
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
    margin: 0 0 0 12px;
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

// 질문 글 고유값	question_id
// 유저 id	user_id integer????
// 닉네임	nickname
// 글 생성일자	creation_date	 // 지난시간 계산?
// 글 제목	title
// 글 내용	contents
// 글 추천수	vote number

export default function QuestionsList() {
    const navigate = useNavigate();
    useScrollTop();

    const questionsList = [
        {
            user_id: 1,
            nickname: "nick",
            creation_date: "2022-12-23",
            title: "Cryptico js store rsa key in file and get RSAKey from file",
            contents: "ㅇㅇ",
            vote: 4,
        },
        {
            user_id: 2,
            nickname: "nack",
            creation_date: "2021-12-25",
            title: "ModuleNotFoundError: No module named 'menu'",
            contents: "ㅇㅇ",
            vote: 4,
        },
    ]; //객체만들고 넣어보고 상세값 조절하기

    return (
        <>
            <Header />
            <Container>
                <LeftSidebar />
                <QuestionsAll>
                    <QuestionMain>
                        <MainTopBar>
                            <Title>Top Questions</Title>
                            <MainTopButton
                                onClick={() => navigate("/register")}
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
