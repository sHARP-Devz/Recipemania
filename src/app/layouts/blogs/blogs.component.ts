import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBlockComponent } from 'src/app/shared/components/title-block/title-block.component';
import { blogsData, visitedBlogs } from './blogsData';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, TitleBlockComponent],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  blogsData = blogsData;
  visitedBlogs = visitedBlogs;
}
