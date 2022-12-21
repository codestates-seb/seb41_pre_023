package com.pre23.pre23.user.entity;


import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "USERS")
public class User extends BaseEntity {

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


    public void addMemberRole(UserRole userRole) {
        roleSet.add(userRole);
    }

}
