package com.pre23.pre23.question.service;

import com.pre23.pre23.exception.BusinessLogicException;
import com.pre23.pre23.exception.ExceptionCode;
import com.pre23.pre23.question.entity.Question;
import com.pre23.pre23.question.repository.QuestionRepository;
import com.pre23.pre23.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;


    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }


    //질문 작성
    public Question createQuestion(Question question){
        return questionRepository.save(question);
    }

    public Question findVerifiedQuestion(long questionId){
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion  = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findQuestion;
    }


    public User findQuestion(long questionId){
        Question findQuestion = findVerifiedQuestion(questionId);
        return findQuestion.getUser();
    }


    //추천 비추
    public Question voteQuestion(long questionId,int vote){
        Question findQuestion = findVerifiedQuestion(questionId);
        findQuestion.setQuestionVote(vote);
        Question updatedQuestion = questionRepository.save(findQuestion);
        return updatedQuestion;
    }

    //글 수정 삭제 -> 추후에...



    //질문 글들 여러개 불러오기
    public Page<Question> findQuestions(int page, int size){
        return questionRepository.findAll(PageRequest.of(page,size));
    }

}
