package com.pre23.pre23.security.filter;

import com.pre23.pre23.security.util.JWTUtil;
import io.jsonwebtoken.lang.Strings;
import lombok.extern.log4j.Log4j2;
import net.minidev.json.JSONObject;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Optional;

@Log4j2
public class ApiCheckFilter extends OncePerRequestFilter {

    private AntPathMatcher antPathMatcher;
    private String pattern;
    private JWTUtil jwtUtil;

    public ApiCheckFilter(String pattern, JWTUtil jwtUtil){
        this.antPathMatcher = new AntPathMatcher();
        this.pattern = pattern;
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        log.info("REQUESTURI: " + request.getRequestURI());

        log.info(antPathMatcher.match(pattern, request.getRequestURI()));

        if(antPathMatcher.match(pattern, request.getRequestURI())) {

            log.info("ApiCheckFilter.................................................");
            log.info("ApiCheckFilter.................................................");
            log.info("ApiCheckFilter.................................................");


            //이메일 알아오기
            String checkHeader = checkAuthHeader(request);

            if(!checkHeader.isEmpty()){
                filterChain.doFilter(request, response);
                return;
            }else {
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                // json 리턴
                response.setContentType("application/json;charset=utf-8");
                JSONObject json = new JSONObject();
                String message = "FAIL CHECK API TOKEN";
                json.put("code", "403");
                json.put("message", message);

                PrintWriter out = response.getWriter();
                out.print(json);
                return;
            }
        }

        filterChain.doFilter(request, response);
    }

    public String checkAuthHeader(HttpServletRequest request) {

        String checkResult = "";

        String authHeader = request.getHeader("Authorization");
        log.info("authHeader : "+authHeader);
        if(StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")){
            log.info("Authorization exist: " + authHeader);

            try {
                String email = jwtUtil.validateAndExtract(authHeader.substring(7));
                log.info("validate result: " + email);
                checkResult =  email;
            } catch (Exception e) {

                log.info("이메일 못 가져옴!!!!");
                e.printStackTrace();
            }
        }

        return checkResult;
    }

}
