import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BookComponent } from './book.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    BookComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
})
export class BookModule {}
