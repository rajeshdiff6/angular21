import { Component } from '@angular/core';
import { CustomModal } from '../custom-modal/custom-modal';

@Component({
  selector: 'app-modal',
  imports: [CustomModal],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  isModalOpen = false;
  isMyModalOpen = false;

  handleConfirm() {
    this.isModalOpen = false;
  }

  openModal() {
    this.isModalOpen = true;
  }

  openMyModal() {
    this.isMyModalOpen = true;
  }

  closeMyModal() {
    this.isMyModalOpen = false;
  }
}
