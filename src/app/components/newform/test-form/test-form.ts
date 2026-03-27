import { Component, inject } from "@angular/core";
import { Form, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-test-form',
    templateUrl: './test-form.html',
    imports: [ReactiveFormsModule]
})
export class TestFormComponent {
    private fb = inject(FormBuilder);

    orderForm!: FormGroup;

    constructor() {
        this.orderForm = this.fb.group({
            orderId: ['', Validators.required],
            orderDate: ['', Validators.required],
            items: this.fb.array([])
        });

        this.addItem();
    }

    get items(): FormArray {
        return this.orderForm.get('items') as FormArray;
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

    removeItem(index: number) {
        if(index >=0) {
            this.items.removeAt(index);
        }
    }

    saveForm() {

    }
}