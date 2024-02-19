import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-title-block',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './title-block.component.html',
  styleUrls: ['./title-block.component.css'],
})
export class TitleBlockComponent {
  @Input() height: number = 150;
  @Input() title: string = 'title';
  @Input() color: string = 'color';
  // @Input() font-size: string = 'color';
  @Input() breadcrumbs: { label: string; link?: string }[] = [];
}
