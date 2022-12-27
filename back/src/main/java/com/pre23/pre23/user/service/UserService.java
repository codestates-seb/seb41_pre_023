package com.pre23.pre23.user.service;

import com.pre23.pre23.exception.BusinessLogicException;
import com.pre23.pre23.exception.ExceptionCode;
import com.pre23.pre23.user.entity.User;
import com.pre23.pre23.user.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {


    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserService(UserRepository userRepository,
                       BCryptPasswordEncoder bCryptPasswordEncoder){

        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public User createUser(User user) {
        // 이미 등록된 이메일인지 확인
        verifyExistsEmail(user.getEmail());

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }


    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email,false);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }

}
