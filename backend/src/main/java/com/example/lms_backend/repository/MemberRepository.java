package com.example.lms_backend.repository;

import com.example.lms_backend.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    // You can add custom query methods if needed
}
