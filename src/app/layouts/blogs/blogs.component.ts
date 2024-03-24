import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBlockComponent } from 'src/app/shared/components/title-block/title-block.component';
import { blogsData, visitedBlogs } from './blogsData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  blogsData = blogsData;
  visitedBlogs = visitedBlogs;
  constructor(private router: Router) {}

  navigateToBlog() {
    this.router.navigate(['/layouts/blog']);
  }
}
