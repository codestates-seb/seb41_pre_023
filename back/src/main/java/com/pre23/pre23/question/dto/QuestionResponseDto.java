package com.pre23.pre23.question.dto;



import com.pre23.pre23.user.dto.UserResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionResponseDto {
    private Long questionId;
    private UserResponseDto user;
    private LocalDateTime creationDate;
    private String questionTitle;
    private String questionContent;
    private long questionVote;
}
