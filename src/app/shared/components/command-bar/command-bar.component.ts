import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/modules/book/models/book';
import { BookService } from 'src/app/modules/book/services/book.service';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss'],
})
export class CommandBarComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  onDeleteAll() {
    this.bookService.deleteAllBooks();
  }

  onNewBook() {
    // router to book-form component
    this.router.navigate(['book-form/form']);
  }
}
