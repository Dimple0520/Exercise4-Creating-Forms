import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [
  {
    path: '',
    component: BookFormComponent,
  },
  {
    path: 'book-form/form/:id',
    component: BookFormComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class BookFormRoutingModule {}
