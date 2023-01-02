package com.pre23.pre23.question.repository;

import com.pre23.pre23.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question,Long> {

    @Query("select c from Question c where c.questionId =: question")
    Page<Question> findAllByQuestionId(Pageable pageable, @Param("question_id") Question questionId);
}
