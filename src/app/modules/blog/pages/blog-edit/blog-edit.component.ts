import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss'],
})
export class BlogEditComponent implements OnInit {
  id: number;
  editMode = false;
  blogForm: FormGroup;

  get blogControls() {
    return (this.blogForm.get('comments') as FormArray).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
   
    if (this.editMode) {
      this.blogService.updateBlog(this.id, this.blogForm.value);
    } else {
      this.blogService.addBlog(this.blogForm.value);
    }
    this.onCancel();
    console.log(this.blogForm.value);
  }

  onAddComment() {
    (<FormArray>this.blogForm.get('comments')).push(
      new FormGroup({
        name: new FormControl(),
      })
    );
  }

  onDeleteComment(index: number) {
    (<FormArray>this.blogForm.get('authors')).removeAt(index);
  }

  onCancel() {
    
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let blogTitle = '';
    let blogDescription = '';
    let blogAuthor = '';
    let blogComments = new FormArray([
      new FormGroup({
        name: new FormControl({
          value: 'Exciting - This is a sample comment',
          disabled: true,
        }),
      }),
    ]);

    if (this.editMode) {
      const blog = this.blogService.getBlog(this.id);
      blogTitle = blog.title;
      blogDescription = blog.description;
      blogAuthor = blog.author;
      if (blog['comments']) {
        for (let author of blog.comments) {
          blogComments.push(
            new FormGroup({
              name: new FormControl(author.name),
            })
          );
        }
      }
    }

    this.blogForm = new FormGroup({
      title: new FormControl(blogTitle),
      description: new FormControl(blogDescription),
      author: new FormControl(blogAuthor),
      comments: blogComments,
    });
  }
}
