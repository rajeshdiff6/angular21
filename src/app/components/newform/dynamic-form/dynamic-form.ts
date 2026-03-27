import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, ],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.scss',
})
export class DynamicForm {
  private fb = inject(FormBuilder);

  orderform!: FormGroup;  

  constructor() {
    this.orderform = this.fb.group({
      orderId: ['', Validators.required],
      orderDate: ['', Validators.required],
      items: this.fb.array([])
    });

    this.addItem();
  }

  get items(): FormArray {
    return this.orderform.get('items') as FormArray;
  }

  createItems() {
    return this.fb.group({
      productName: '',
      price: '',
      quantity: ''
    });
  }

  addItem() {
    this.items.push(this.createItems());
  }

  removeItem(index: number){
    if(index >= 0 && index < this.items.length) {
      this.items.removeAt(index);
    }
  }

  saveOrderForm() {

  }
}
