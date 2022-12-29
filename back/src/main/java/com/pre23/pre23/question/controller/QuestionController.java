package com.pre23.pre23.question.controller;

import com.pre23.pre23.question.dto.QuestionPostDto;
import com.pre23.pre23.question.entity.Question;
import com.pre23.pre23.question.mapper.QuestionMapper;
import com.pre23.pre23.question.service.QuestionService;
import com.pre23.pre23.response.SingleResponseDto;
import com.pre23.pre23.user.mapper.UserMapper;
import com.pre23.pre23.user.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

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

}
