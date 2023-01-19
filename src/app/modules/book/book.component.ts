import { Component, OnInit } from '@angular/core';
import { Book } from './models/book';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  selectedBook: Book;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
  }
}
