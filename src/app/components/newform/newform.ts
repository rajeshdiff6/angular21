import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveForm } from './reactive-form/reactive-form';
import { DynamicForm } from './dynamic-form/dynamic-form';

@Component({
  selector: 'app-newform',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, ReactiveForm, DynamicForm],
  templateUrl: './newform.html',
  styleUrl: './newform.scss',
})

export class Newform {
  private http = inject(HttpClient);

  countries = [
    {
      name : "India",
      cities: ["Delhi", "Chennai", "Bangalore"]
    },
    {
      name: "Srilanka",
      cities: ["Colombo", "Kandy"]
    }
  ];

  cities: string[] = [];

  formData = {
    country: '',
    city:''
  }


  ngOnInit() {
    
  }

  onCountryChange() {console.log(this.formData);
    const selectedCountry = this.countries.find(c => c.name === this.formData.country);

    this.cities = selectedCountry ? selectedCountry.cities: [];
  }

  saveForm() {
    this.http.post("/haha", this.formData).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err) 
    });
  }
}
