package com.pre23.pre23.security;

import com.pre23.pre23.security.util.JWTUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class JWTTests {
    private JWTUtil jwtUtil;

    @BeforeEach
    public void testBefore() {

        System.out.println("testBefore...........");
        jwtUtil = new JWTUtil();
    }

    @Test
    public void testEncod() throws Exception{
        String email ="quintuplest2000@gmail.com";

        String str = jwtUtil.generateToken(email);

        System.out.println(str);
    }
}
