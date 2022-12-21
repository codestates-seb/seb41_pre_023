package com.pre23.pre23.config;

import com.pre23.pre23.security.filter.ApiCheckFilter;
import com.pre23.pre23.security.filter.ApiLoginFilter;
import com.pre23.pre23.security.handler.ApiLoginFailHandler;
import com.pre23.pre23.security.handler.UserLoginSuccessHandler;
import com.pre23.pre23.security.service.UserDetailsService;
import com.pre23.pre23.security.util.JWTUtil;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@Log4j2
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfig  {


    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }




    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        //h2 접속 설정
        http.csrf().disable();
        http.headers().frameOptions().disable();
        //AuthenticationManager 설정
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());

        // Get AuthenticationManager
        AuthenticationManager authenticationManager = authenticationManagerBuilder.build();

        //반드시 필요
        http.authenticationManager(authenticationManager);

        http.formLogin();
        http.csrf().disable();
        http.logout();
        http.oauth2Login().successHandler(successHandler());

        http.rememberMe().tokenValiditySeconds(60*60*24*7).userDetailsService(userDetailsService);
        http.addFilterBefore(apiCheckFilter(), UsernamePasswordAuthenticationFilter.class);

        http.addFilterBefore(apiLoginFilter(authenticationManager), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    public ApiLoginFilter apiLoginFilter(AuthenticationManager authenticationManager) throws Exception{

        ApiLoginFilter apiLoginFilter =  new ApiLoginFilter("/users/login", jwtUtil());
        apiLoginFilter.setAuthenticationManager(authenticationManager);

        apiLoginFilter
                .setAuthenticationFailureHandler(new ApiLoginFailHandler());

        return apiLoginFilter;
    }

    @Bean
    public JWTUtil jwtUtil() {
        return new JWTUtil();
    }

    @Bean
    public UserLoginSuccessHandler successHandler() {
        return new UserLoginSuccessHandler(passwordEncoder());
    }

    @Bean
    public ApiCheckFilter apiCheckFilter() {

        return new ApiCheckFilter("/notes/**/*", jwtUtil());
    }

}


