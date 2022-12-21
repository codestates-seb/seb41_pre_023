package com.pre23.pre23.user.controller;


import com.pre23.pre23.response.SingleResponseDto;
import com.pre23.pre23.user.dto.UserSignUpDto;
import com.pre23.pre23.user.entity.User;
import com.pre23.pre23.user.mapper.UserMapper;
import com.pre23.pre23.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
@Validated
@Slf4j
public class UserController {
    private UserService userService;
    private UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    //회원가입 api
    @PostMapping("/register")
    public ResponseEntity createUser(@Valid @RequestBody UserSignUpDto userDTO){
        User user = mapper.userSignInDtoToUser(userDTO);
        User createdUser = userService.createUser(user);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(createdUser)),
                HttpStatus.CREATED
        );

    }



}
