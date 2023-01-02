package com.pre23.pre23.security.handler;

import com.pre23.pre23.security.dto.AuthUserDTO;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Log4j2
public class UserLoginSuccessHandler implements AuthenticationSuccessHandler {

    private RedirectStrategy redirectStratgy = new DefaultRedirectStrategy();

    private PasswordEncoder passwordEncoder;

    public UserLoginSuccessHandler() {
        passwordEncoder = new BCryptPasswordEncoder();
    }

    public UserLoginSuccessHandler(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }




    //지워야하는데 abstract class 여서 못지우는중
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        log.info("--------------------------------------");
        log.info("onAuthenticationSuccess");

        AuthUserDTO authMember = (AuthUserDTO) authentication.getPrincipal();

        boolean fromSocial = authMember.isFromSocial();

        log.info("Need Modify Member?" + fromSocial);

        /*
        //비번 db에서 가져오는걸로 수정 필요
        boolean passwordResult = passwordEncoder.matches("1111", authMember.getPassword());

        if (fromSocial && passwordResult) {
            log.info("asdfsfdasdffa");
            redirectStratgy.sendRedirect(request, response, "/member/modify?from=social");
        }

         */
    }


}
