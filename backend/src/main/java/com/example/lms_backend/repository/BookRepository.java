package com.example.lms_backend.repository;

import com.example.lms_backend.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    // Additional query methods can be defined here
}
