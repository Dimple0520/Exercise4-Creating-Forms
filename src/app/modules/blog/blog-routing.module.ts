import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],

  exports: [RouterModule],
})
export class BlogRoutingModule {}
