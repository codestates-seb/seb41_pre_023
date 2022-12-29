import React from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Discard from "../components/discard.jsx";
// import TitleCard, {
//     FirstBodyCard,
//     SecondBodyCard,
// } from "../components/Card.jsx";

document.documentElement.setAttribute("data-color-mode", "light");

//내용물 담는 박스
const Content = styled.div`
    padding: 50px 0 0 0;
    background-color: #f8faf9;
`;

//전체를 감싸주는 배경 컨테이너
const LayoutContainer = styled.div`
    width: 100%;
    max-width: 1215px;
    margin: 0 auto;
`;

//헤더부분
const HeaderRow = styled.div`
    display: flex;
    height: 130px;
    background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=c56910988bdf);
    background-repeat: no-repeat;
    background-position: right bottom;
`;

//헤더 글 "Ask a public question" 부분
const TitleContainer = styled.div`
    display: flex;
    align-items: center;

    h1 {
        font-size: 27px;
        font-weight: bold;
    }
`;

//Notification 글 담는 부분
const Notice = styled.div`
    max-width: 70%;
    margin: 24px 0;
    padding: 24px;
    height: 250px;
    background: #ebf4fb;
    color: #3b4045;
    border: 1px solid hsl(206deg 93% 84%);
    border-radius: 3px;

    h2 {
        font-size: 1.3rem;
        font-weight: 400;
        margin-bottom: 16px;
    }

    p {
        margin-bottom: 5px;
        font-size: 0.9rem;

        span {
            color: #0074cc;
        }
    }

    h5 {
        font-size: 0.85rem;
        margin: 15px 0;
    }

    ul {
        margin-left: 30px;
        font-size: 0.85rem;
        list-style-type: disc;
        line-height: 18px;

        li {
            display: list-item;
        }
    }
`;

// title 박스
const QuestionTitle = styled.div`
    max-width: 70%;
    margin-bottom: 24px;
    padding: 24px;
    background: white;
    border: 1px solid hsl(210deg 8% 90%);
    border-radius: 3px;
`;

//title 글씨
const Title = styled.div`
    color: #0c0d0e;
    font-weight: 600;
    font-size: 1.11rem;
`;

//title 상세설명 글
const Desc = styled.div`
    color: #3b4045;
    margin: 0.5rem 0;
    font-size: 0.8rem;
`;

//input 넣을 폼 박스
const Form = styled.form`
    width: 100%;
    margin: 10px 0 0;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid rgb(218, 221, 223);
    border-radius: 5px;

    &:focus {
        outline: none;
        border-color: hsl(206deg 100% 52%);
        box-shadow: 0px 0px 0px 5px #e1ecf4;
    }
`;

const Container = styled.div`
    // 페이지 전체
    max-width: 100%;
    background-color: hsl(210, 8%, 97.5%);
    margin: 0 24px 24px 24px;
    justify-content: center;
    margin: 0;
    flex: 1 0 auto;
    text-align: left;
`;

const LowContainer = styled.div`
    // 마지막 아래 창
    width: 100% !important;
    display: flex !important;
    margin-top: 12px !important;
    align-items: flex-start !important;
    box-sizing: inherit;
    line-height: 15px;
`;
const EditorContainer = styled.div`
    // 에디터 프레임
    width: 70% !important;
    background-color: white !important;
    border-color: hsl(210, 8%, 90%);
    border-radius: 3px !important;
    border-style: solid !important;
    border-width: 1px !important;
    box-sizing: inherit;
    // height: 500px;
    padding: 24px;
    display: flex !important;
    flex-direction: column !important;
    margin-right: 0;
    margin-left: 0;
    margin: -2px;
`;
const EditorTitleContainer = styled.div`
    // 에디터 제목 창
    margin: 2px;
    box-sizing: inherit;
`;

const ButtonContainer = styled.div`
    // 버튼 창
    display: flex !important;
    position: relative;
    margin-top: 20px !important;
    box-sizing: inherit;
`;
const PostButton = styled.button`
    // 제출 버튼
    margin-top: 0.9rem;
    margin-right: 1rem;
    margin-bottom: 50px;
    padding: 10px;
    border: 1px solid #79a7c7;
    border-radius: 3px;
    background: #0995fd;
    color: white;

    &:not(:last-child) {
        margin-top: 0;
    }

    &:hover {
        background-color: hsl(206deg 100% 40%);
        cursor: pointer;
    }
`;
const DiscardButton = styled.button`
    margin-bottom: 50px;
    padding: 10px;
    border: none;
    background: transparent;
    color: rgb(195, 62, 50);

    &:hover {
        background: #fcf2f1;
        border-radius: 3px;
        cursor: pointer;
    }
`;

export default function QuestionAsk() {
    //card 창
    // const [titleCardOpen, setTitleCardOpen] = useState({
    //     visibility: "visible",
    // });
    // const [firstBodyCardOpen, setfirstBodyCardOpen] = useState({
    //     visibility: "hidden",
    // });
    // const [secondBodyCardOpen, setSecondBodyCardOpen] = useState({
    //     visibility: "hidden",
    // });

    //discard 모달창
    const [discardOpen, setDiscardOpen] = useState(false);
    const onDiscardModal = () => {
        setDiscardOpen(!discardOpen);
    };

    //페이지 이동
    const navigate = useNavigate();

    //content input 창 관리
    const [problemValue, setProblemValue] = useState("");
    const [tryValue, setTryValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    console.log(titleValue);

    //제목글 작성 관리
    const titleChange = (e) => {
        setTitleValue(e.target.value);
    };

    //질문글 post 요청 보내기
    const addQuestion = async () => {
        try {
            if (titleValue !== "" && problemValue !== "" && tryValue !== "") {
                //빈칸 방지
                await axios.post(`http://localhost:8080/questions`, {
                    title: titleValue,
                    contents: problemValue + tryValue,
                });
                navigate("/");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <Content>
                <LayoutContainer>
                    <HeaderRow>
                        <TitleContainer>
                            <h1>Ask a public question</h1>
                        </TitleContainer>
                    </HeaderRow>
                    <Container>
                        <Notice>
                            <h2>Writing a good question</h2>
                            <p>
                                You’re ready to <span>ask</span> a{" "}
                                <span>programming-related question</span> and
                                this form will help guide you through the
                                process.
                            </p>
                            <p>
                                Looking to ask a non-programming question? See{" "}
                                <span>the topics here</span> to find a relevant
                                site.
                            </p>
                            <h5>Steps</h5>
                            <ul>
                                <li>
                                    Summarize your problem in a one-line title.
                                </li>
                                <li>Describe your problem in more detail.</li>
                                <li>
                                    Describe what you tried and what you
                                    expected to happen.
                                </li>
                                <li>
                                    Add “tags” which help surface your question
                                    to members of the community.
                                </li>
                                <li>
                                    Review your question and post it to the
                                    site.
                                </li>
                            </ul>
                        </Notice>
                    </Container>
                    <Container>
                        <QuestionTitle>
                            <Title>Title</Title>
                            <Desc>
                                Be specific and imagine you’re asking a question
                                to another person.
                            </Desc>
                            <Form>
                                <Input
                                    type="text"
                                    name="title"
                                    placeholder="e.g.Is there an R function for finding the index of an element in a vector?"
                                    onChange={titleChange}
                                    value={titleValue}
                                />
                            </Form>
                        </QuestionTitle>
                        {/* <TitleCard titleCardOpen={titleCardOpen} /> */}
                    </Container>
                    <LowContainer>
                        <EditorContainer>
                            <EditorTitleContainer>
                                <Title>
                                    What are the details of your problem?
                                    <Desc>
                                        Introduce the problem and expand on what
                                        you put in the title.
                                    </Desc>
                                </Title>
                            </EditorTitleContainer>
                            <MDEditor
                                value={problemValue}
                                onChange={setProblemValue}
                            />
                            {/* <MDEditor.Markdown source={problemValue} style={{ whiteSpace: 'pre-wrap' }} /> */}
                        </EditorContainer>
                        {/* <FirstBodyCard firstBodyCardOpen={firstBodyCardOpen} /> */}
                    </LowContainer>
                    <LowContainer>
                        <EditorContainer>
                            <EditorTitleContainer>
                                <Title>
                                    What did you try and what were you
                                    expecting?
                                    <Desc>
                                        {" "}
                                        Describe what you tried. what you
                                        expected to happen, and what actually
                                        resuited.
                                    </Desc>
                                </Title>
                            </EditorTitleContainer>
                            <MDEditor value={tryValue} onChange={setTryValue} />
                            {/* <MDEditor.Markdown source={tryValue} style={{ whiteSpace: 'pre-wrap' }} /> */}
                        </EditorContainer>
                        {/* <SecondBodyCard
                            secondBodyCardOpen={secondBodyCardOpen}
                        /> */}
                    </LowContainer>
                    <ButtonContainer>
                        <PostButton onClick={addQuestion}>
                            Post your question
                        </PostButton>
                        {discardOpen && (
                            <Discard
                                onDiscardModal={onDiscardModal}
                                setProblemValue={setProblemValue}
                                setTryValue={setTryValue}
                                setTitleValue={setTitleValue}
                            />
                        )}
                        <DiscardButton onClick={onDiscardModal}>
                            Discard draft
                        </DiscardButton>
                    </ButtonContainer>
                </LayoutContainer>
                <Footer></Footer>
            </Content>
        </>
    );
}
// 내꺼
