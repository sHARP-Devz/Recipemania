import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Output() isClose = new EventEmitter<void>()

  ngOnChanges(): void {
    this.toggleBodyOverflow(this.isOpen);
  }

  onClose(): void {
    this.isClose.emit();
  }

  onModalClick(event: Event): void {
    event.stopPropagation();
  }

  toggleBodyOverflow(open: boolean): void {
    const body = document.body;
    if (body) {
      body.style.overflow = open ? 'hidden' : 'unset';
    }
  }
}
