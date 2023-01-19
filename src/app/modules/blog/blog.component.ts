import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/services/book.service';
import { Blog } from './models/blog';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  selectedBlog: Blog;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    
  }
}
