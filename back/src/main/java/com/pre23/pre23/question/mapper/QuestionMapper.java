package com.pre23.pre23.question.mapper;

import com.pre23.pre23.question.dto.QuestionPostDto;
import com.pre23.pre23.question.dto.QuestionResponseDto;
import com.pre23.pre23.question.entity.Question;
import com.pre23.pre23.question.service.QuestionService;
import com.pre23.pre23.user.entity.User;
import com.pre23.pre23.user.mapper.UserMapper;
import com.pre23.pre23.user.service.UserService;
import org.mapstruct.Mapper;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto, UserService userService, HttpServletRequest request){
        Question question = new Question();
        question.setQuestionVote(0);

        question.setQuestionTitle(questionPostDto.getQuestionTitle());
        question.setQuestionContent(questionPostDto.getQuestionContent());
        question.setCreationDate(LocalDateTime.now());
        question.setUser(userService.getLoginedUser(request));
        return question;
    }

    default QuestionResponseDto questionToQuestionResponseDto(UserMapper userMapper,Question question){
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setQuestionTitle(question.getQuestionTitle());
        questionResponseDto.setQuestionContent(question.getQuestionContent());
        questionResponseDto.setQuestionVote(question.getQuestionVote());
        questionResponseDto.setCreationDate(question.getCreationDate());

        User user = question.getUser();//질문 작성자 속성 추가
        questionResponseDto.setUser(userMapper.userToUserResponseDto(user));//질문 작성자 속성 추가
        return questionResponseDto;
    }

    List<QuestionResponseDto> questionsToQuestionResponseDto(List <Question> questions);


}
