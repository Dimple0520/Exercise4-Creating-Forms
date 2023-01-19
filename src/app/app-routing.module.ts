import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './modules/blog/blog.component';
import { BlogDetailComponent } from './modules/blog/pages/blog-detail/blog-detail.component';
import { BlogEditComponent } from './modules/blog/pages/blog-edit/blog-edit.component';
import { BlogStartComponent } from './modules/blog/pages/blog-start/blog-start.component';
import { BookComponent } from './modules/book/book.component';
import { BookDetailComponent } from './modules/book/pages/book-detail/book-detail.component';
import { BookEditComponent } from './modules/book/pages/book-edit/book-edit.component';
import { BookFormModule } from './modules/book/pages/book-form.module';
import { BookStartComponent } from './modules/book/pages/book-start/book-start.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: BlogStartComponent,
      },
      {
        path: ':id',
        component: BlogDetailComponent,
      },
      {
        path: ':id/edit',
        component: BlogEditComponent,
      },
    ],
  },
  {
    path: 'book',
    
    component: BookComponent,
    children: [
      {
        path: '',
        component: BookStartComponent,
      },
      
      {
        path: ':id',
        component: BookDetailComponent,
      },

      {
        path: ':id/edit',
        component: BookEditComponent,
      },
    ],
  },
  {
    path: 'book-form/form',
    loadChildren: () =>
      import('./modules/book/pages/book-form.module').then(
        (m) => m.BookFormModule
      ),
  },
  {
    path: 'blog-form/form',
    loadChildren: () =>
      import('./modules/blog/pages/blog-edit/blog-form.module').then(
        (m) => m.BlogFormModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
