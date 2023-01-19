import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../modules/book/services/book.service';
import { Book } from '../modules/book/models/book';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private bookService: BookService) {}

  storeBooks() {
    const books = this.bookService.getBooks();
    // PUT to database.json file
    this.http.put('database.json', books).subscribe((response) => {
      console.log(response);
    });
  }
}
