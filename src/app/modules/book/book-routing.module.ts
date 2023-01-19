import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BookComponent } from './book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    // 1 pass routers to router module
    RouterModule.forChild(routes),
    CommonModule,
  ],
  // 2 export router module
  exports: [RouterModule],
})
export class BookRoutingModule {}
