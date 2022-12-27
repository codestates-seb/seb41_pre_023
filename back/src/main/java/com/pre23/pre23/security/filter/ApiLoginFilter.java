package com.pre23.pre23.security.filter;


import com.google.gson.Gson;
import com.pre23.pre23.security.dto.AuthUserDTO;
import com.pre23.pre23.security.util.JWTUtil;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.stereotype.Service;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;
import java.util.Scanner;

@Log4j2
public class ApiLoginFilter extends AbstractAuthenticationProcessingFilter {

    private JWTUtil jwtUtil;

    public ApiLoginFilter(String defaultFilterProcessesUrl, JWTUtil jwtUtil) {

        super(defaultFilterProcessesUrl);
        this.jwtUtil = jwtUtil;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException, IOException, ServletException {
        log.info("-----------------ApiLoginFilter---------------------");
        log.info("attemptAuthentication");

        //post
        String requestedBody = request.getReader().lines().reduce("",String::concat);
        Gson gson = new Gson();
        Map<String, String> map = gson.fromJson(requestedBody,Map.class);

        /*요청 들어온거 로그 찍기
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            log.info(entry.getValue());
        }

         */
        String email = map.get("email");
        String pw = map.get("password");

//        if(email == null){
//            throw new BadCredentialsException("email cannot be null");
//        }
//
//        return null;
//
        UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(email, pw);

        return getAuthenticationManager().authenticate(authToken);
    }


    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {

        log.info("-----------------ApiLoginFilter---------------------");
        log.info("successfulAuthentication: " + authResult);

        log.info(authResult.getPrincipal());

        //email address
        String email = ((AuthUserDTO)authResult.getPrincipal()).getUsername();

        String token = null;
        try {
            token = jwtUtil.generateToken(email);

            response.setContentType("text/plain");
            response.getOutputStream().write(token.getBytes());

            log.info(token);


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
