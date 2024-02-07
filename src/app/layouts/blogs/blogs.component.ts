import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from 'src/app/shared/components/heading/heading.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, HeadingComponent],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {}
