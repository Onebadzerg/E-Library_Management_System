package com.example.lms_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;  // Add this import statement

import com.example.lms_backend.model.Book;
import com.example.lms_backend.repository.BookRepository;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    // Add Book method
    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    // Get all books method
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
}
