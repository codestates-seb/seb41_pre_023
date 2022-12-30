package com.pre23.pre23.user.mapper;

import com.pre23.pre23.user.dto.UserResponseDto;
import com.pre23.pre23.user.dto.UserSignUpDto;
import com.pre23.pre23.user.entity.User;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Mapper(componentModel = "spring")
public interface UserMapper {

    default User userSignInDtoToUser(UserSignUpDto userSignInDTO) {
        User user = new User();

        user.setEmail(userSignInDTO.getEmail());
        user.setNickname(userSignInDTO.getNickname());
        user.setPassword(userSignInDTO.getPassword());
        user.setFromSocial(userSignInDTO.isFromSocial());
        user.setRegDate(LocalDateTime.now());
        user.setModDate(LocalDateTime.now());
        return user;
    }

    default UserResponseDto userToUserResponseDto(User user) {

        UserResponseDto userResponseDto = new UserResponseDto();

        userResponseDto.setEmail(user.getEmail());
        userResponseDto.setNickname(user.getNickname());
        userResponseDto.setFromSocial(user.isFromSocial());
        userResponseDto.setRegDate(user.getRegDate());

        return userResponseDto;
    }

}