package com.pre23.pre23.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionPostDto {

    @NotNull
    private String questionTitle;

    @NotNull(message = "글 내용은 비어있을 수 없습니다")
    private String questionContent;
}
