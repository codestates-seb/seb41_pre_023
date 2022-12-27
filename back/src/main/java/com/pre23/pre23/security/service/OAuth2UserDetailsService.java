package com.pre23.pre23.security.service;

import com.pre23.pre23.security.dto.AuthUserDTO;
import com.pre23.pre23.user.entity.User;
import com.pre23.pre23.user.entity.UserRole;
import com.pre23.pre23.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

@Log4j2
@Service
@RequiredArgsConstructor
public class OAuth2UserDetailsService extends DefaultOAuth2UserService {


    private final UserRepository repository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        log.info("--------------------------------------");
        log.info("userRequest:" + userRequest);

        String clientName = userRequest.getClientRegistration().getClientName();

        log.info("clientName: " + clientName);
        log.info(userRequest.getAdditionalParameters());

        OAuth2User oAuth2User =  super.loadUser(userRequest);

        log.info("==============================");
        oAuth2User.getAttributes().forEach((k,v) -> {
            log.info(k +":" + v);
        });

        String email = null;
        String nickname ="test";

        if(clientName.equals("Google")){
            email = oAuth2User.getAttribute("email");
        }

        log.info("EMAIL: " + email);
        log.info("nickname: " + nickname);

        User user = saveSocialMember(email,nickname);
        AuthUserDTO authUser = new AuthUserDTO(
                user.getEmail(),
                user.getPassword(),
                true,
                user.getRoleSet().stream()
                        .map(role -> new SimpleGrantedAuthority("ROLE_"+role.name()))
                        .collect(Collectors.toSet())
        );

        authUser.setName(authUser.getName());


        return authUser;

    }


    private User saveSocialMember(String email, String nickname){

        //기존에 동일한 이메일로 가입한 회원이 있는 경우에는 그대로 조회만
        Optional<User> result = repository.findByEmail(email, true);

        if(result.isPresent()){
            return result.get();
        }

        //이 부분 수정해야함
        User siteUser = User.builder().email(email)
                .nickname(nickname)
                .password( passwordEncoder.encode("1111") )
                .fromSocial(true)
                .build();

        siteUser.addMemberRole(UserRole.USER);


        repository.save(siteUser);

        return siteUser;
    }

}