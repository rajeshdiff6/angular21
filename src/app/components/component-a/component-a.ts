import { Component, EventEmitter, inject, Input, model, Output } from '@angular/core';
import { ServiceA } from '../../services/service-a';
import { ColorDirective } from '../../directives/color-directive';
import { MessagePipe } from '../../pipes/message-pipe';

@Component({
  selector: 'app-component-a',
  imports: [ColorDirective, MessagePipe],
  templateUrl: './component-a.html',
  styleUrl: './component-a.scss',
})
export class ComponentA {
  private componentService = inject(ServiceA);
  twowaybindingcomponent = model(0);

  @Input() name: string = "test";
  @Output() update = new EventEmitter<string>();

  a = 2;
  b= 5;

  items = [
    {"id": 1, "item": "apple"},
    {"id": 2, "item": "banana"},
    {"id": 3, "item": "orange"}
  ];

  constructor() {
    console.log('Component A Service Data:', this.componentService.data);
  }

  updateTwoWayBindingValue() {
    this.twowaybindingcomponent.update(value => value+1);
  }

  clickUpdate() {
    this.update.emit("update from child");
  }
}
