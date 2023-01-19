import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.book = this.bookService.getBook(this.id);
    });
  }

  onEditBook() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteBook() {
    this.bookService.deleteBook(this.id);
    this.router.navigate(['/book']);
  }
}
