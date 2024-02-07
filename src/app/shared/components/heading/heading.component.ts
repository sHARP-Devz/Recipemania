import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from 'src/app/layouts/blog/blog.component';
import { BlogsComponent } from 'src/app/layouts/blogs/blogs.component';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule, BlogsComponent],
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
})
export class HeadingComponent {}
