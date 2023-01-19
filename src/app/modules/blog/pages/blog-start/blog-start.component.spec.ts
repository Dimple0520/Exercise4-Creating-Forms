import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStartComponent } from './blog-start.component';

describe('BlogStartComponent', () => {
  let component: BlogStartComponent;
  let fixture: ComponentFixture<BlogStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
