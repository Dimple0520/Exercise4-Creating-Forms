import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CommandBarComponent } from 'src/app/shared/components/command-bar/command-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogEditComponent } from './pages/blog-edit/blog-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { BlogStartComponent } from './pages/blog-start/blog-start.component';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogDetailComponent,
    BlogEditComponent,
    BlogFormComponent,
    BlogStartComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
})
export class BlogModule {}
