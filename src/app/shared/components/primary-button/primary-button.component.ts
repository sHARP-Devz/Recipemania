import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent {
  @Input() bgColor: string = '#FDA47A';
  @Input() fsize: string = '20px';
  @Input() padding: string = '20px';
  @Input() label: string = 'label';
  @Input() width!: number;
  @Input() height!: number;
  @Output() onClick = new EventEmitter<any>();


  emitEvent() {
    this.onClick.emit()
  }
}
