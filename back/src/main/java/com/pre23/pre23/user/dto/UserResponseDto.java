package com.pre23.pre23.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserResponseDto {

    private String nickname;
    private String email;
    private boolean fromSocial;

}
