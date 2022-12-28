package com.pre23.pre23.user.service;

import com.pre23.pre23.exception.BusinessLogicException;
import com.pre23.pre23.exception.ExceptionCode;
import com.pre23.pre23.security.filter.ApiCheckFilter;
import com.pre23.pre23.user.entity.User;
import com.pre23.pre23.user.repository.UserRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@Log4j2
@Service
public class UserService {


    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final ApiCheckFilter apiCheckFilter;


    public UserService(UserRepository userRepository,
                       BCryptPasswordEncoder bCryptPasswordEncoder, ApiCheckFilter apiCheckFilter){

        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.apiCheckFilter = apiCheckFilter;
    }

    //현재 로그인 된 유저 가져오기
    public User getLoginedUser(HttpServletRequest request){


        //프론트 요청과 함께 온 jwt 가져오기


        //지금 여기 email을 못 가져와서 문제발생
        String email = apiCheckFilter.checkAuthHeader(request);
        log.info("사용자의 email :"+email);
        //db에서 유저 검색하기
        Optional<User> foundUser = userRepository.findByEmail(email, false);
        log.info(foundUser);
        User result = foundUser.get();
        log.info(result);
        return result;
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
