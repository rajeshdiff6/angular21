import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-modal',
  imports: [CommonModule],
  templateUrl: './custom-modal.html',
  styleUrl: './custom-modal.scss',
})
export class CustomModal {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Modal Title';
  @Input() message: string = 'Modal body content goes here';
  @Output() onClose = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();

  closeModal(): void {
    this.onClose.emit();
  }

  confirmModal(): void {
    this.onConfirm.emit();
  }
}
