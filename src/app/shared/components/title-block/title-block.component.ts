import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-title-block',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './title-block.component.html',
  styleUrls: ['./title-block.component.css']
})
export class TitleBlockComponent {
  @Input() height:number = 150;
  @Input() title:string = 'title'
  @Input() page:string = 'page'
}
