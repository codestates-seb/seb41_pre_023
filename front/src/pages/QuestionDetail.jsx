import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import styled from "styled-components";
import Footer from "../components/Footer";
import MDEditor from "@uiw/react-md-editor";

const Container = styled.div`
  //메인 전체창 AQ,LS,RS
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const QuestionsAll = styled.div`
  //AQ, RS
  height: auto;
  max-height: 3000px;
  min-height: 1000px;

  max-width: 3000px;
  border-left: 1px;
  border: 1px solid hsl(210deg 8% 85%);
  background: white;
  padding: 74px 24px 24px 24px;
  width: calc(100% - 164px);
`;

const QuestionMain = styled.div`
  //질문 보여줄 곳

  width: calc(100% - 320px); // 메인 길이조절
  background-color: white;
`;

const MainTopBar = styled.div`
  display: flex;
  width: 1060px;
  height: 45px;
  padding-bottom: 8px;
  border-bottom: 1px;
  margin-bottom: 16px;
`;

const MainTopBottom = styled.div`
  display: flex;
  width: 1060px;
  height: 25px;
  padding-bottom: 8px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
  margin-bottom: 16px;
  font-size: 13px;
  line-height: 17px;
`;

const Title = styled.h1`
  font-size: 27px;
  flex: 1 auto;
  margin: 0 0 8px;
  height: 35px;
`;

const MainTopButton = styled.button`
  background-color: ${(props) => props.BgColor};
  margin: ${(props) => props.margin};
  padding: 8px 10px;
  border: 1px solid transparent;
  height: 39px;
  min-width: 58px;
  width: auto;
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

const QuestionDay = styled.div`
  padding-right: 6px;
  color: hsl(210deg 8% 45%);
`;

const QuestionCard = styled.div`
  display: grid;
`;
const QuestionContent = styled.div`
  padding-right: 16px;
  width: auto;
  min-width: 0;
  font-size: 15px;
  line-height: 23px;
`;
const QuestionProfile = styled.div`
  display: flex;
  margin-top: 42px;
  justify-content: flex-end;
`;

const ProfileBox = styled.div`
  width: 200px;
  height: 70px;
  background-color: rgb(217, 234, 247);
  padding: 5px 7px;
  margin: 3px 0;
`;
const ProfileTime = styled.div`
  color: hsl(210deg 8% 45%);
  font-size: 12px;
  line-height: 16px;
  margin: 1px 0 2px 0;
  display: flex;
  justify-content: flex-start;
`;
const ProfileDetails = styled.div`
  font-size: 13px;
  color: #2582cf;
  line-height: 17px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
`;
const ProfileLabel = styled.div`
  font-size: 13px;
  line-height: 13px;
  display: flex;
  align-items: center; //중앙정렬
  justify-content: flex-start;
`;
const Answer = styled.div`
  padding-top: 10px;
  width: auto;
  max-width: 730px;
`;

const AnswerText = styled.h2`
  padding: 8px 0 0 0;
  margin-top: ${(props) => props.margintop};
  margin-bottom: -8px;
  font-size: ${(props) => props.fontsize};
  line-height: ${(props) => props.lineheight};
`;
const AnswerForm = styled.form`
  margin-top: 20px;
`;

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
    creation_date: "2020-12-25",
    title: "ModuleNotFoundError: No module named 'menu'",
    contents: "ㅇㅇ",
    vote: 4,
  },
]; //객체만들고 넣어보고 상세값 조절하기

//시간계산 알고리즘
function ElapsedTime(date) {
  const start = new Date(date);
  const end = new Date();

  const diff = (end - start) / 1000;

  const times = [
    { name: "years", milliSeconds: 60 * 60 * 24 * 365 },
    { name: "months", milliSeconds: 60 * 60 * 24 * 30 },
    { name: "mins", milliSeconds: 60 * 60 * 24 },
    { name: "hours", milliSeconds: 60 * 60 },
    { name: "mins", milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime} ${value.name} ago`;
    }
  }
  return "Now";
}

export default function QuestionDetail() {
  const [problemValue, setProblemValue] = React.useState("");
  const [tryValue, setTryValue] = React.useState("");
  return (
    <>
      <Container>
        <LeftSidebar />
        <QuestionsAll>
          <QuestionMain>
            <MainTopBar>
              <Title>{questionsList[1].title}</Title>

              <MainTopButton
                BgColor="hsl(206deg 100% 52%)"
                Color="hsl(0deg 0% 100%)"
                BoColor="hsl(204, 41%, 63%)"
              >
                Ask Question
              </MainTopButton>
            </MainTopBar>
            <MainTopBottom>
              <QuestionDay>Asked</QuestionDay>
              <time dateTime={new Date(questionsList[1].creation_date)}>
                {ElapsedTime(questionsList[1].creation_date)}
              </time>
            </MainTopBottom>
            <QuestionCard>
              <QuestionContent>
                How to code invoice bill validation like wise stock system. This
                will do if customer pay balance invoice amount system will
                automatically reduce that amount from invoice bill amount and
                automatically update database data table and update invoice bill
                balance. How to do this operation using PHP. I want this problem
                to resolve. how to do that.
              </QuestionContent>

              <QuestionProfile>
                <ProfileBox>
                  <ProfileTime>
                    <time dateTime={new Date(questionsList[1].creation_date)}>
                      asked {ElapsedTime(questionsList[1].creation_date)}
                    </time>
                  </ProfileTime>
                  <ProfileDetails>아이디</ProfileDetails>
                  <ProfileLabel>
                    <svg
                      aria-hidden="true"
                      class="svg-icon iconWave"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path
                        d="M10.7 17c-2.3 0-3.9-2.05-5.07-3.54l-.49-.6c-.67-.8-1.59-1.63-2.4-2.36A10.91 10.91 0 0 1 1.1 8.87a.79.79 0 0 1-.09-.56c.04-.19.14-.34.27-.4.14-.07.29-.1.45-.1.35 0 .67.18.87.34l3.5 2.75c.04.03.1.03.13 0a.09.09 0 0 0 .02-.13l-.02-.02c-.57-.8-3.42-4.77-3.71-5.15-.21-.27-.3-.58-.24-.84.05-.2.2-.37.4-.48.18-.09.35-.13.52-.13.44 0 .76.28.96.51l3.6 4.42c.04.04.07.06.14.02.05-.02.06-.07.03-.12L4.41 2.96a.94.94 0 0 1-.1-.73.92.92 0 0 1 .47-.57 1.06 1.06 0 0 1 1.4.39l3.8 6.14c.03.04.07.07.14.04.04-.03.06-.07.04-.13A153.8 153.8 0 0 0 8.1 2.54c-.31-.68-.2-1.14.36-1.42.52-.27 1.14-.07 1.47.48l3.69 8.3c.02.04.05.05.1.06a.1.1 0 0 0 .09-.07l.66-2.28c.1-.3.31-.56.62-.72.3-.15.65-.18.98-.1.7.2 1.09.87.89 1.52-.1.37-.46 1.73-.99 3.43l-.1.33c-.58 1.86-1.03 3.33-3.11 4.4-.7.35-1.38.53-2.05.53Z"
                        fill="black"
                      ></path>
                      <path
                        d="M14 .37a.5.5 0 0 0-.88.45l1.96 3.9a.5.5 0 0 0 .9-.45L14 .37Zm-1.17 2.17a.5.5 0 0 0-.91.42l.84 1.87a.5.5 0 1 0 .91-.41l-.84-1.88Zm-10.6 9.74a.5.5 0 0 1 .7-.02l1.7 1.6a.5.5 0 0 1-.7.72l-1.68-1.6a.5.5 0 0 1-.02-.7Zm-1.39.98a.5.5 0 1 0-.68.73l3.03 2.84a.5.5 0 0 0 .68-.73L.84 13.26Z"
                        opacity=".4"
                      ></path>
                    </svg>
                    New contribute
                  </ProfileLabel>
                </ProfileBox>
              </QuestionProfile>
            </QuestionCard>
          </QuestionMain>
          <Answer>
            <AnswerText margintop="50px" fontsize="17px" lineheight="24px">
              Know someone who can answer? Share a link to this{" "}
              <a href="https://stackoverflow.com/questions/74920675/axios-cannot-get-only-response-of-base64-but-can-get-the-others-data">
                question
              </a>{" "}
              via{" "}
              <a href="mailto:?subject=Stack%20Overflow%20Question&amp;body=axios%20cannot%20get%20only%20response%20of%20base64%20but%20can%20get%20the%20others%20data%0Ahttps%3a%2f%2fstackoverflow.com%2fq%2f74920675%2f20808215%3fsem%3d2">
                email
              </a>
              ,{" "}
              <a href="https://twitter.com/share?url=https%3a%2f%2fstackoverflow.com%2fq%2f74920675%2f20808215%3fstw%3d2">
                Twitter
              </a>
              , or{" "}
              <a href="https://www.facebook.com/sharer.php?u=https%3a%2f%2fstackoverflow.com%2fq%2f74920675%2f20808215%3fsfb%3d2">
                Facebook
              </a>
            </AnswerText>
            <AnswerText margintop="10px" fontsize="19px" lineheight="25px">
              Your Answer
            </AnswerText>
            <AnswerForm>
              <MDEditor value={problemValue} onChange={setProblemValue} />
              <MainTopButton
                margin="10px 0 15px 0"
                BgColor="hsl(206deg 100% 52%)"
                Color="hsl(0deg 0% 100%)"
                BoColor="hsl(204, 41%, 63%)"
              >
                Post Your Answer
              </MainTopButton>
            </AnswerForm>
          </Answer>
        </QuestionsAll>
      </Container>
      <Footer />
    </>
  );
}
