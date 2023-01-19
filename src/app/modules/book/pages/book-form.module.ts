import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormRoutingModule } from './book-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';
import { BookStartComponent } from './book-start/book-start.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookItemComponent } from '../components/book-item/book-item.component';

@NgModule({
  declarations: [BookFormComponent, BookStartComponent, BookEditComponent],
  imports: [CommonModule, BookFormRoutingModule, ReactiveFormsModule],
})
export class BookFormModule {}
