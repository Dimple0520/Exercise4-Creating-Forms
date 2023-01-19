import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from '../blog-form/blog-form.component';

const routes: Routes = [
  {
    path: '',
    component: BlogFormComponent,
  },
  {
    path: 'blog-form/form/:id',
    component: BlogFormComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class BlogFormRoutingModule {}
