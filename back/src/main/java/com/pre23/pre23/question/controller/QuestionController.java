package com.pre23.pre23.question.controller;

import com.pre23.pre23.question.dto.QuestionPostDto;
import com.pre23.pre23.question.entity.Question;
import com.pre23.pre23.question.mapper.QuestionMapper;
import com.pre23.pre23.question.service.QuestionService;
import com.pre23.pre23.response.MultiResponseDto;
import com.pre23.pre23.response.SingleResponseDto;
import com.pre23.pre23.user.mapper.UserMapper;
import com.pre23.pre23.user.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/question")
@Validated
@Slf4j
@AllArgsConstructor
public class QuestionController<response> {

    private QuestionService questionService;
    private UserService userService;
    private UserMapper userMapper;
    private QuestionMapper questionMapper;


    //답변 작성 question API
    @PostMapping("")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto, HttpServletRequest request){


        Question question =questionService.createQuestion(questionMapper.questionPostDtoToQuestion(questionPostDto,userService,request));

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(userMapper,question)), HttpStatus.CREATED);

    }

    //모든 답변 가져오기 API
    @GetMapping("")
    public ResponseEntity getQuestions(@Positive @RequestParam int page, @Positive @RequestParam int size){

        //서비스로 questions 불러오기
        Page<Question> pageQuestions = questionService.findQuestions(page-1,size);
        //리스트에 questions 담기
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDto(questions),pageQuestions),
                        HttpStatus.OK
        );
    }


    //특정 질문 가져오기 API
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId){
        Question question = questionService.findQuestion(questionId);
        log.info("컨트롤러 : "+question.getQuestionTitle());


        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(userMapper,question)),
                HttpStatus.OK);
    }



}
