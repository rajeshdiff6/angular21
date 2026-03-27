import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss',
})
export class Todolist {
 lists!: any[];
 todo = new FormGroup({
  list: new FormControl('')
 });

 constructor() {
  this.lists = [];
 }

 remove(i: any) {
  this.lists.splice(i, 1);
 }

 add() {
  const value = this.todo.get('list')?.value;
  this.lists.push(this.todo.get('list')?.value);
 }

 save() {

 }
}
