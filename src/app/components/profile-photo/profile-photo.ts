import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, Input, model } from '@angular/core';

@Component({
  selector: 'app-profile-photo',
  imports: [],
  templateUrl: './profile-photo.html',
  styleUrl: './profile-photo.scss',
})
export class ProfilePhoto {
  src1 = Input('');
  src2 = model(0);

  srcfromParent = computed(() => this.src1);

  ngOnInit() {
    
  }
}
