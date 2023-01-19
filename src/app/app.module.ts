import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BookService } from './modules/book/services/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookModule } from './modules/book/book.module';
import { BlogService } from './modules/blog/services/blog.service';
import { HttpClientModule } from '@angular/common/http';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule,
    BookModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BookService, BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
