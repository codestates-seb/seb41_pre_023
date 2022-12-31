import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";

const QuestionList = styled.div`
    margin-left: -24px;
    margin-bottom: 30px;
    border-top: 1px solid hsl(210deg 8% 85%);
`;
const Question = styled.div`
    height: 120px;
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom: 1px solid hsl(210deg 8% 90%);
    padding: 16px;
    text-align: left;
    :nth-child(2n) {
        background-color: hsl(47deg 87% 94%);
    }
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
    cursor: pointer;
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
    const start = moment(date).add(9, "h"); //작성일자 => 들어오는 값이 9시간 전이 들어옴..
    const end = moment(); //현재시간

    return end.to(start);
}

//const 문법?
const Questions = ({ questionList }) => {
    for (let quest of questionList) {
        quest.question.creationDate = new Date(quest.question.creationDate);
    }
    questionList.sort(
        (a, b) => b.question.creationDate - a.question.creationDate
    );
    // console.log(questionList);

    return (
        <>
            <QuestionList>
                {questionList.map((question) => (
                    <Question key={question.question.questionId}>
                        <QuestionSummary>
                            <span>{question.question.questionVote}</span>
                            <span>votes</span>
                        </QuestionSummary>
                        <QuestionContent>
                            <QuestionTitle>
                                <Link
                                    to={`/${question.question.questionId}`}
                                    state={{
                                        question,
                                    }}
                                >
                                    {" "}
                                    {question.question.questionTitle}
                                </Link>
                            </QuestionTitle>
                            <QuestionData>
                                <QuestionCard>
                                    {question.user.nickname}
                                </QuestionCard>

                                <time>
                                    {ElapsedTime(
                                        question.question.creationDate
                                    )}
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
