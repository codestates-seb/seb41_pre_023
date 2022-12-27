import styled from "styled-components";

const QuestionList = styled.div`
  margin-left: -24px;
  margin-bottom: 30px;
  background: lightgreen;
  border-top: 1px solid hsl(210deg 8% 85%);
`;
const Question = styled.div`
  background: hsl(47deg 87% 94%);
  height: 120px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: 1px solid hsl(210deg 8% 90%);
  padding: 16px;
  text-align: left;
`;
const QuestionSummary = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 45px;
  height: 23px;
  text-align: left;
  gap: 0.3em;
  margin: 0 16px 4px 0;
  color: hsl(210deg 8% 45%);
  font-size: 13px;
`;

const QuestionContent = styled.div`
  flex-grow: 1;
  max-width: 100%;
`;

const QuestionTitle = styled.h3`
  // a태그 삽입할지 고민할 것
  font-size: 17px;
  line-height: 22px;
  margin-top: -1.95px;
  margin-bottom: 5px;
  color: hsl(209deg 100% 38%);
`;

const QuestionData = styled.div`
  margin-left: auto;
  float: right;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: 12px;
  height: 38px;
  align-items: center;
`;
const QuestionCard = styled.div`
  padding-right: 6px;
  color: hsl(206deg 100% 40%);
`;

//시간계산 알고리즘
function ElapsedTime(date) {
  const start = new Date(date);
  const end = new Date();

  const diff = (end - start) / 1000;

  const times = [
    { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
    { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
    { name: "일", milliSeconds: 60 * 60 * 24 },
    { name: "시간", milliSeconds: 60 * 60 },
    { name: "분", milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime}${value.name} 전`;
    }
  }
  return "방금 전";
}

//const 문법?
const Questions = ({ questionList }) => {
  console.log(questionList);

  return (
    <>
      <QuestionList>
        {questionList.map((question) => (
          <Question key={question.user_id}>
            <QuestionSummary>
              <span>{question.vote}</span>
              <span>votes</span>
            </QuestionSummary>
            <QuestionContent>
              <QuestionTitle>{question.title}</QuestionTitle>
              <QuestionData>
                <QuestionCard>{question.nickname}</QuestionCard>

                <time dateTime={new Date(question.creation_date)}>
                  {ElapsedTime(question.creation_date)}
                </time>
              </QuestionData>
            </QuestionContent>
          </Question>
        ))}
      </QuestionList>
    </>
  );
};
export default Questions;

// 질문 글 고유값	question_id
// 유저 id	user_id
// 닉네임	nickname
// 글 생성일자	creation_date	d
// 글 제목	title
// 글 내용	contents
// 글 추천수	vote

// user_id: 1,
//       nickname: "nick",
//       creation_date: "2022-12-25",
//       title: "맵맵",
//       contents: "ㅇㅇ",
//       vote: 4,