package com.pre23.pre23.user.repository;

import com.pre23.pre23.user.entity.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

    User findByNickname(String nickname);
    @EntityGraph(attributePaths = {"roleSet"}, type = EntityGraph.EntityGraphType.LOAD)
    @Query("select m from User m where m.fromSocial = :social and m.email =:email")
    Optional<User> findByEmail(String email,boolean social);
}
