import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.blog = this.blogService.getBlog(this.id);
    });
  }

  onEditBlog() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteBlog() {
    this.blogService.deleteBlog(this.id);
    this.router.navigate(['/blog']);
  }
}
