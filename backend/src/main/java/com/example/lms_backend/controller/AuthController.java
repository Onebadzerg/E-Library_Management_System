package com.example.lms_backend.controller;

import com.example.lms_backend.model.Member;
import com.example.lms_backend.service.AuthService; // Ensure AuthService exists in this package or update the package path
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<Member> registerMember(@RequestBody Member member) {
        Member savedMember = authService.registerMember(member);
        return ResponseEntity.ok(savedMember);
    }
    
    // Add other endpoints (e.g., login) if you need them
}
