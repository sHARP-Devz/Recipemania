import { Component } from '@angular/core';
import { blogsData } from './blogs-description.data';
import { TitleBlockComponent } from 'src/app/shared/components/title-block/title-block.component';
@Component({
  selector: 'app-blogs-description',
  templateUrl: './blogs-description.component.html',
  styleUrls: ['./blogs-description.component.css'],
})
export class BlogsDescriptionComponent {
  blogsData = blogsData;
}
