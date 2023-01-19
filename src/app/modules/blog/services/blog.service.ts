import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Blog } from '../models/blog';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogChanged = new Subject<Blog[]>();

  private blogs: Blog[] = [
    new Blog(
      19,
      'The Creative Penn',
      'This blog has abundant resources',
      'Joanna Penn',
      [new Comment('Extreme and Realistic!'), new Comment('So creative!')]
    ),

    new Blog(
      20,
      'The Travelling Pages',
      'A life with a lots of destination',
      'John Canella',
      [
        new Comment('Happy Trip!'),
        new Comment('Exciting Adventure!'),
      ]
    ),

    new Blog(
      21,
      'The Magic Word',
      'A secret word that full magic',
      'Poppy Z. Brite',
      [
        new Comment('So curious!'),
      ]
    ),
  ];

  constructor() {}

  getBlogs() {
    return this.blogs.slice();

  }

  getBlog(index: number) {
    return this.blogs[index];
  }

  addBlog(book: Blog) {
    this.blogs.push(book);
    this.blogChanged.next(this.blogs.slice());
  }

  updateBlog(index: number, newBlog: Blog) {
    this.blogs[index] = newBlog;
    this.blogChanged.next(this.blogs.slice());
  }

  deleteBlog(index: number) {
    this.blogs.splice(index, 1);
    this.blogChanged.next(this.blogs.slice());
  }
}
