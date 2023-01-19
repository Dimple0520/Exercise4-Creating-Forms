import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/modules/book/models/book';
import { BookService } from 'src/app/modules/book/services/book.service';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit, OnDestroy {
  blogs: Blog[];
  subscription: Subscription;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.blogService.blogChanged.subscribe(
      (blogs: Blog[]) => {
        this.blogs = blogs;
      }
    );
    this.blogs = this.blogService.getBlogs();
  }

  onNewComment() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
