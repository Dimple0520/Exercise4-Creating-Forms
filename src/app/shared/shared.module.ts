import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BookFormModule } from '../modules/book/pages/book-form.module';
import { BlogModule } from '../modules/blog/blog.module';

@NgModule({
  declarations: [CommandBarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, BookFormModule],
  exports: [HeaderComponent, CommandBarComponent],
})
export class SharedModule {}
