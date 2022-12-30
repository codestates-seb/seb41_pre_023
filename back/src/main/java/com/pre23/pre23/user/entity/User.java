package com.pre23.pre23.user.entity;


import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, updatable = false, unique = true, columnDefinition = "TEXT")
    private String email;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String password;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String nickname;

    @Column(nullable = true)
    private boolean fromSocial;

    @Column(nullable = true)
    @ElementCollection(fetch = FetchType.LAZY)
    private Set<UserRole> roleSet;



    //계정 생성 시간
    private LocalDateTime regDate;
    //계정 최종 수정 시간
    private LocalDateTime modDate;


    public void addMemberRole(UserRole userRole) {
        roleSet.add(userRole);
    }

}
