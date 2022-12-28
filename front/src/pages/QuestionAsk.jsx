import React from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

document.documentElement.setAttribute("data-color-mode", "light");

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

const Content = styled.div`
    // 가운데 정렬 큰 창
    margin: 0px 24px 32px 24px;
    min-height: 800px;
    overflow: visible; // 내용 넘치면 div 밖으로 튀어나오는게 기본
    // width: 100%;
    // max-width: 1264px;
    // margin: 0;
    border-left: 0;
    border-right: 0;
    background-color: transparent;
    box-sizing: border-box;
    padding: 0 24px 24px 24px;

    text-align: left; /* 문자들의 가운데 정렬을 해제 */
    width: 83%;
    margin: 0 auto;
`;

const Boxborder = styled.div`
    // 내용 큰 창
    width: 100% !important;
    // height: 100%;
    box-sizing: border-box !important;
    //background-color: lightgoldenrodyellow;
    min-height: 800px;
    align-items: center !important;
`;

const TopContainer = styled.div`
    // Ask a public question 창
    margin-bottom: 12px !important;
    width: 100 !important;
    background-repeat: no-repeat !important;
    background-position: right bottom !important;
    display: flex !important;
    align-items: center !important;
    // box-sizing: inherit;
    // background-color: lightcoral;
`;
const H1 = styled.h1`
    // Ask a public question
    font-size: 1.8rem !important;
    font-weight: 600 !important;
    margin-top: 70px !important;
    line-height: 1.4;
    margin: 0 0 -16px 0;
    padding: 24px 0px 0px 0px;
    // background-color: lightcoral;
`;
const ContentContainer = styled.div`
    // 내용 창
    width: 106.5% !important;
    margin-top: 60px !important;
    box-sizing: inherit;
    background-color: yellow;
    display: flex !important;
    margin-bottom: 16px !important;
    align-items: center !important;
    background-color: rgb(235, 244, 251);
    border-color: rgb(166, 206, 237);
    color: hsl(210, 8%, 25%);
    border-style: solidcolor;
    font-size: 13px;
    border-radius: 3px;
    border-width: 1px;
    display: flex !important;
    align-items: center !important;
    padding: 24px 24px 4px 24px !important;
`;
const H2 = styled.h2`
    // Writing a good question
    font-weight: 400 !important;
    margin-bottom: 16px !important;
    line-height: 1.4;
    margin: 0 0 1em;
    font-size: 1.31538462rem !important;
`;
const P = styled.p`
    // 여기서부터 @media 적용 => 이 전까지 @media 확인하기
    margin-bottom: 0 !important;
    clear: both;
    margin-top: 7px;
    font-size: 1rem !important;
    font-size: 0.95384615rem !important;
`;
const AskLink = styled.a`
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
    user-select: auto;
`;
const ProgrammingLink = styled.a`
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
    user-select: auto;
`;
const PP = styled.p`
    margin-bottom: 1em;
    clear: both;
    font-size: 1rem !important;
    font-size: 0.95384615rem !important;
`;
const TopicLink = styled.a`
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
    user-select: auto;
`;
const H5 = styled.h5`
    // 여기서부터 body *의 box-sizing: inherit;까지 반영(윗 부분 확인하기) / Steps
    font-weight: 600 !important;
    margin-bottom: 8px !important;
    margin-top: 0;
    box-sizing: inherit;
    font-size: 13px;
`;
const UlContainer = styled.ul`
    // ul 창
    margin-bottom: 0 !important;
    list-style-type: disc;
    margin-left: 30px;
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    // list-style: none;
`;
const List1 = styled.li`
    margin-left: 30px;
    // margin: 0;
    padding: 0;
    box-sizing: inherit;
    // display: list-item;
    // text-align: -webkit-match-parent;
    font-size: 13px;
`;
const List2 = styled.li`
    margin-left: 30px;
    // margin: 0;
    padding: 0;
    box-sizing: inherit;
    // display: list-item;
    // text-align: -webkit-match-parent;
    font-size: 13px;
`;
const List3 = styled.li`
    margin-left: 30px;
    // margin: 0;
    padding: 0;
    box-sizing: inherit;
    // display: list-item;
    // text-align: -webkit-match-parent;
    font-size: 13px;
`;
const List4 = styled.li`
    margin-left: 30px;
    // margin: 0;
    padding: 0;
    box-sizing: inherit;
    // display: list-item;
    // text-align: -webkit-match-parent;
    font-size: 13px;
`;
const List5 = styled.li`
    margin-left: 30px;
    // margin: 0;
    padding: 0;
    box-sizing: inherit;
    // display: list-item;
    // text-align: -webkit-match-parent;
    font-size: 13px;
`;
const MiddleContainer = styled.div`
    // Title 넣을 중간 창
    flex-direction: column-reverse !important; // 생성방향 아래에서 위로
    width: 100% !important;
    display: flex !important;
    // background-color: yellow;
    --_gap-y: 16px;
    --_gap-x: 16px;
    line-height: 20px;
`;
const TitleInputContainer = styled.div`
    // Title 창(border 포함)
    width: 70% !important;
    padding: 24px !important;
    flex-shrink: 0 !important;
    background-color: hsl(0, 0%, 100%) !important;
    border-color: hsl(210, 8%, 90%);
    border-radius: 3px !important;
    border-style: solid !important;
    border-width: 1px !important;
    //background-color: pink;
    //width: 70% important;
`;
const TitlePadding = styled.div`
    // title 여백
    display: flex !important;
    flex-direction: column !important;
    margin-right: 0;
    margin-left: 0;
    margin: -2px;
    box-sizing: inherit;
    --_gap-y: 16px;
    --_gap-x: 16px;
    text-align: left;
    //background: orange;
`;
const Title = styled.div`
    margin-right: 0;
    margin-left: 0;
    margin: 2px;
    display: flex !important;
    flex-direction: column !important;
    box-sizing: inherit;
    --_gap-y: 16px;
    --_gap-x: 16px;
    text-align: left;
`;
const TitleTitle = styled.label`
    // title창의 title부분
    cursor: pointer;
    font-size: 1.15384615rem;
    color: hsl(210, 8%, 5%);
    font-family: inherit;
    font-weight: 600;
    padding: 0 2px;
    --_gap-y: 16px;
    --_gap-x: 16px;
    text-align: left;
`;
const TitleDetail = styled.div`
    flex-direction: column !important;
    display: flex !important;
    box-sizing: inherit;
    --_gap-y: 16px;
    --_gap-x: 16px;
    text-align: left;
    margin-top: 2px !important;
    margin-bottom: 2px !important;
    flex-basis: 75%;
    padding: 0 2px;
    color: hsl(210, 8%, 25%);
    font-size: 12px;
    box-sizing: inherit;
`;
const TitleDescription = styled.label`
    // title창의 be specific and ~ 부분
    box-sizing: inherit;
`;
const TitleInputBox = styled.div`
    margin-right: 0;
    margin-left: 0;
    margin: 2px;
    display: flex !important;
    position: relative !important;
    box-sizing: inherit;
`;
const TitleInput = styled.input`
    // title의 input창
    -webkit-appearance: none;
    width: 100%;
    margin: 0;
    // padding: 0.6em 0.7em;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    background-color: white;
    color: hsl(210, 8%, 5%);
    font-size: 13px;
    font-family: inherit;
    box-sizing: inherit;
    height: 30px;
`;
const RightNav = styled.div`
    // title 옆에 introduce the problem 박스
    width: 100% !important;
    position: relative !important;
    box-sizing: inherit;
    box-shadow: 0 1px 2px lightgray !important;
`;
const NavTitle = styled.div`
    // title 옆에 introduce the problem 제목 칸
    font-size: 1.3rem !important;
    padding: 12px !important;
    background-color: hsl(210, 8%, 97.5%);
    border-color: hsl(210, 8%, 85%) !important;
    border-bottom-style: solid !important;
    border-bottom-width: 1px !important;
    box-sizing: inherit;
`;
const LowContainer = styled.div`
    // 마지막 아래 창
    width: 100% !important;
    display: flex !important;
    margin-top: 12px !important;
    --_gap-y: 16px;
    --_gap-x: 16px;
    align-items: flex-start !important;
    box-sizing: inherit;
    line-height: 20px;
`;
const EditorContainer = styled.div`
    // 에디터 프레임
    width: 70% !important;
    flex-shrink: 0 !important;
    background-color: white !important;
    border-color: hsl(210, 8%, 90%);
    border-radius: 3px !important;
    border-style: solid !important;
    border-width: 1px !important;
    box-sizing: inherit;
    // height: 500px;
    padding: 24px;
    box-sizing: inherit;
    display: flex !important;
    flex-direction: column !important;
    margin-right: 0;
    margin-left: 0;
    margin: -2px;
`;
const EditorTitleContainer = styled.div`
    // 에디터 제목 창
    margin-right: 0;
    margin-left: 0;
    margin: 2px;
    box-sizing: inherit;
`;
const EditorTitleLabel = styled.label`
    // 에디터 제목 레이블
    cursor: pointer;
    display: block !important;
    font-size: 1.15384614rem;
    color: hsl(210, 8%, 5%);
    font-family: inherit;
    font-weight: 600;
    padding: 0 2px;
    box-sizing: inherit;
`;
const EditorTitleDescription = styled.p`
    // 에디터 제목 설명
    font-weight: normal;
    padding: 0;
    margin-bottom: 5px !important;
    margin-top: 2px !important;
    color: hsl(210, 8%, 25%);
    font-size: 12px;
    clear: both;
    box-sizing: inherit;
`;
const ButtonContainer = styled.div`
    // 버튼 창
    clear: both !important;
    display: flex !important;
    padding-bottom: 60px;
    margin-top: 15px !important;
    margin-bottom: 30px;
    margin: -8px;
    box-sizing: inherit;
`;
const ReviewButton = styled.button`
    // 리뷰 버튼
    margin: 16px;
    text-decoration: none;
    margin-top: 0;
    margin-bottom: 0;
    background-color: hsl(206, 100%, 52%);
    border: 1px solid transparent;
    border-radius: 3px;
    color: hsl(0, 0%, 100%);
    font-size: 13px;
    padding: 0.8em;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-weight: normal;
    line-height: 1.15384615;
    position: relative;
    outline: none;
    text-align: center;
`;
const DiscardButton = styled.button`
    // 제거 버튼
    margin-top: 0;
    margin-bottom: 0;

    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
    color: hsl(358, 62%, 47%);
    font-size: 13px;
    padding: 0.8em;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-weight: normal;
    line-height: 1.15384615;
    position: relative;
    outline: none;
    text-align: center;
    text-decoration: none;
    user-select: none;
`;
const ModalContainer = styled.aside`
    background-color: hsla(358, 67%, 6%, 0.5);
    max-height: unset;
    max-width: unset;
    align-items: center;
    backface-visibility: hidden;
    display: flex;
    inset: 0;
    justify-content: center;
    opacity: 0;
    position: fixed;
    transition: opacity 100ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s,
        z-index 0s 100ms, visibility 0s 100ms;
    visibility: hidden;
    will-change: visibility, z-index, opacity;
    z-index: -1;
`;
const ModalBox = styled.div`
    opacity: 1;
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    transition: opacity 100ms cubic-bezier(0.165, 0.84, 0.44, 1) 10ms,
        z-index 0s 0s, visibility 0s 0s,
        transform 100ms cubic-bezier(0.165, 0.84, 0.44, 1) 10ms,
        transform 100ms cubic-bezier(0.165, 0.84, 0.44, 1) 10ms;
    visibility: visible;
    z-index: 9000;

    padding: 24px 24px 24px;
    backface-visibility: hidden;
    background-color: white;
    border-radius: 7px;
    // box-shadow: var(--bs-lg);
    max-height: 100%;
    max-width: 600px;
    overflow-y: auto;
    will-change: visibility, z-index, opacity, transform;
`;
const PPP = styled.p`
    color: hsl(210, 8%, 25%);
    margin-bottom: 24px;
    clear: both;
    margin-top: 0;
`;
const DiscardButtonContainer = styled.div`
    margin-top: 24px;
    display: flex !important;
    margin-bottom: 0;
    margin: -4px;
`;
const DiscardQuestionButton = styled.button`
    border-color: transparent;
    background-color: hsl(358, 62%, 52%);
    color: white;
    margin-top: 0;
    margin-bottom: 0;
    margin: -4px;
`;
const CancelButton = styled.button`
    margin-top: 0;
    margin-bottom: 0;
    margin: -4px;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
    color: hsl(210, 8%, 45%);
    font-size: 13px;
    padding: 0.8em;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-weight: normal;
    line-height: 1.15384615;
    position: relative;
    outline: none;
    text-align: center;
    text-decoration: none;
    user-select: none;
`;
const CloseButton = styled.button`
    margin: 0 !important;
    vertical-align: bottom;
`;
export default function QuestionAsk() {
    const navigate = useNavigate();

    const [problemValue, setProblemValue] = useState("");
    const [tryValue, setTryValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    console.log(titleValue);

    const titleChange = (e) => {
        setTitleValue(e.target.value);
    };

    const addQuestion = async () => {
        try {
            await axios.post(`http://localhost:8080/questions`, {
                title: titleValue,
                contents: problemValue + tryValue,
            });
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const handleDiscard = () => {
        setProblemValue("");
        setTryValue("");
        setTitleValue("");
    };

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <Boxborder>
                        <TopContainer>
                            <H1>
                                Ask a public question
                                <ContentContainer>
                                    <H2>
                                        Writing a good question
                                        <P>
                                            You're ready to
                                            <AskLink href="https://stackoverflow.com/help/how-to-ask">
                                                {" "}
                                                ask
                                            </AskLink>{" "}
                                            a
                                            <ProgrammingLink href="https://stackoverflow.com/help/on-topic">
                                                {" "}
                                                programming-related question
                                            </ProgrammingLink>{" "}
                                            and this form will help guide you
                                            through the process.
                                        </P>
                                        <PP>
                                            {" "}
                                            Looking to ask a non-programming
                                            question? See
                                            <TopicLink href="https://stackexchange.com/sites#technology-traffic">
                                                {" "}
                                                the topic here
                                            </TopicLink>{" "}
                                            to find a relevant site.
                                        </PP>
                                        <H5>Steps</H5>
                                        <UlContainer>
                                            <List1>
                                                {" "}
                                                Summarize your problem in a
                                                one-line title.
                                            </List1>
                                            <List2>
                                                {" "}
                                                Describe your problem in more
                                                detail.
                                            </List2>
                                            <List3>
                                                {" "}
                                                Describe what you tried and what
                                                you expected to happen.
                                            </List3>
                                            <List4>
                                                {" "}
                                                Add "tags" which help surface
                                                your question to members of the
                                                community.
                                            </List4>
                                            <List5>
                                                {" "}
                                                Review your question and post it
                                                to the site.
                                            </List5>
                                        </UlContainer>
                                    </H2>
                                </ContentContainer>
                            </H1>
                        </TopContainer>
                        <MiddleContainer>
                            <TitleInputContainer>
                                <TitlePadding>
                                    <Title>
                                        <TitleTitle>
                                            Title
                                            <TitleDetail>
                                                <TitleDescription>
                                                    Be specific and imagine
                                                    you're asking a question to
                                                    another person.
                                                    <TitleInputBox>
                                                        <TitleInput
                                                            placeholder=" e.g. Is there an R function for finding the index of an element in a vector?"
                                                            onChange={
                                                                titleChange
                                                            }
                                                            value={titleValue}
                                                        ></TitleInput>
                                                    </TitleInputBox>
                                                </TitleDescription>
                                            </TitleDetail>
                                        </TitleTitle>
                                    </Title>
                                </TitlePadding>
                            </TitleInputContainer>
                        </MiddleContainer>
                        <LowContainer>
                            <EditorContainer>
                                <EditorTitleContainer>
                                    <EditorTitleLabel>
                                        What the details of your problem?
                                        <EditorTitleDescription>
                                            {" "}
                                            Introduce the problem and expand on
                                            what you put in the title.
                                        </EditorTitleDescription>
                                    </EditorTitleLabel>
                                </EditorTitleContainer>
                                <MDEditor
                                    value={problemValue}
                                    onChange={setProblemValue}
                                />
                                {/* <MDEditor.Markdown source={problemValue} style={{ whiteSpace: 'pre-wrap' }} /> */}
                            </EditorContainer>
                        </LowContainer>
                        <LowContainer>
                            <EditorContainer>
                                <EditorTitleContainer>
                                    <EditorTitleLabel>
                                        What did you try and what were you
                                        expecting?
                                        <EditorTitleDescription>
                                            {" "}
                                            Describe what you tried. what you
                                            expected to happen, and what
                                            actually resuited.
                                        </EditorTitleDescription>
                                    </EditorTitleLabel>
                                </EditorTitleContainer>
                                <MDEditor
                                    value={tryValue}
                                    onChange={setTryValue}
                                />
                                {/* <MDEditor.Markdown source={tryValue} style={{ whiteSpace: 'pre-wrap' }} /> */}
                            </EditorContainer>
                        </LowContainer>
                        <ButtonContainer>
                            <ReviewButton onClick={addQuestion}>
                                Post your question
                            </ReviewButton>
                            <DiscardButton onClick={handleDiscard}>
                                Discard draft
                            </DiscardButton>
                            <ModalContainer
                                aria-labelledby="vodal-title"
                                aria-describedby="modal-description"
                                aria-hidden="false"
                                data-modal-toggle="popup-modal"
                            >
                                <ModalBox>
                                    <H1>
                                        Discard question
                                        <PPP>
                                            Are you sure you want to discard
                                            this question? This cannot be
                                            undone.
                                        </PPP>
                                        <DiscardButtonContainer>
                                            <DiscardQuestionButton data-modal-toggle="popup-modal">
                                                Discard question
                                            </DiscardQuestionButton>
                                            <CancelButton data-modal-toggle="popup-modal">
                                                Cancel
                                            </CancelButton>
                                            <CloseButton aria-label="Close">
                                                {" "}
                                                <svg
                                                    aria-hidden="true"
                                                    class="svg-icon iconClearSm"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                >
                                                    {" "}
                                                </svg>
                                                <path d="M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41Z"></path>
                                            </CloseButton>
                                        </DiscardButtonContainer>
                                    </H1>
                                </ModalBox>
                            </ModalContainer>
                        </ButtonContainer>
                    </Boxborder>
                </Content>
                <Footer></Footer>
            </Container>
        </>
    );
}
// 내꺼
