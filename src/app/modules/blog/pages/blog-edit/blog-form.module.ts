import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogFormRoutingModule } from './blog-form-routing.module';
import { BookFormComponent } from 'src/app/modules/book/pages/book-form/book-form.component';
import { BlogComponent } from '../../blog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, BlogFormRoutingModule, ReactiveFormsModule],
})
export class BlogFormModule {}
