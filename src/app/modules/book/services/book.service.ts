import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Author } from '../models/author';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookChanged = new Subject<Book[]>();

  private books: Book[] = [
    new Book(
      1,
      'A Time to Kill',
      [new Author('John Grisham'), new Author('Thomas Wolfe')],
      '1862-001989'
    ),
    new Book(
      2,
      'The House of Mirth',
      [new Author('Edith Wharton'), new Author('Paul Apostle')],
      '415-05643286'
    ),
    new Book(
      3,
      'The Sun also Rises',
      [new Author('John Steinbeck'), new Author('Abel Steinbeck')],
      '978-0446310789'
    ),
  ];

  constructor() {}

  setBooks(books: Book[]) {
    this.books = books;
    this.bookChanged.next(this.books.slice());
  }

  getBooks() {
    return this.books.slice();
    
  }

  getBook(index: number) {
    return this.books[index];
  }

  addBook(book: Book) {
    this.books.push(book);
    this.bookChanged.next(this.books.slice());
  }

  updateBook(index: number, newBook: Book) {
    this.books[index] = newBook;
    this.bookChanged.next(this.books.slice());
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    this.bookChanged.next(this.books.slice());
  }

  deleteAllBooks() {
    this.books = [];
    this.bookChanged.next(this.books.slice());
  }
}
