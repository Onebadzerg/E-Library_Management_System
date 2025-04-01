package com.example.lms_backend.service;

import com.example.lms_backend.model.Member;
import com.example.lms_backend.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private MemberRepository memberRepository;

    public Member registerMember(Member member) {
        // Do any validation or password encryption here
        return memberRepository.save(member);
    }
}
