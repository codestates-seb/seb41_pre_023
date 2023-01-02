package com.pre23.pre23.question.entity;


import com.pre23.pre23.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

import static javax.persistence.FetchType.*;

@Entity
@Table(name = "question")
@Getter
@Setter
@NoArgsConstructor
public class Question {

    @Id
    @GeneratedValue
    @Column(name = "question_id")
    private Long questionId;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private User user;

    //질문 생성 시간
    private LocalDateTime creationDate;

    @Column(nullable = false,length = 100, name="question_title")
    private String questionTitle;

    @Column(nullable = false, columnDefinition = "TEXT", name="question_content")
    private String questionContent;

    @Column(nullable = false, columnDefinition = "INT", name="question_vote")
    private long questionVote;


    //닉네임	nickname 어케함?



}
