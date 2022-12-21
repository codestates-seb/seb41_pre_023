package com.pre23.pre23.user.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserSignUpDto {

    @NotBlank
    @Email
    private String email;

    @NotBlank(message = "nickname should not be blank")
    private String nickname;

    @NotBlank(message = "Password should not be blank")
    private String password;

    private boolean fromSocial;

}
