import { Component, inject, Inject } from '@angular/core';
import { Actor } from '../../models/actor';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { ServiceA } from '../../services/service-a';

@Component({
  selector: 'app-ra-form',
  imports: [FormsModule, JsonPipe, ReactiveFormsModule],
  templateUrl: './ra-form.html',
  styleUrl: './ra-form.scss',
})
export class RaForm {
  result$: any;
  serviceA = inject(ServiceA);
  formBuilder = inject(FormBuilder);
  model = new Actor(1, 'John Doe', 'Dancing', 'DreamWorks');

  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];

  searchBox = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      landMark: new FormControl('')
    })
  });

  profileFormBuilder = this.formBuilder.group({
    username: ['', Validators.required],
    address: ['']
  })

  formBuilderSubmit() {
    
  }

  searchConfirm() {

  }

  ngOnInit() {
    // debounce implmentation with switchmap
    this.result$ = this.searchBox.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm) => {
        console.log("switchmap", searchTerm);
        return this.serviceA.searchAPI(searchTerm);
      })
    );

    this.result$.subscribe((result: any) => {
      console.log("result", result);
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.model);
  }

  profileSubmit() {
    console.log(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: "Vigneshwari",
      lastName: "Ponraj"
    })
  }

  updateName() {
    this.profileForm.setValue({
      firstName: "Ram",
      lastName: "Kumar",
      address: {
        street: "Hackensack",
        landMark: "cosco"
      }
    });
  }
}
