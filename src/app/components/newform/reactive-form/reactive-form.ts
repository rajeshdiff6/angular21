import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { currencyIndianValidator } from '../../../validators/custom-validator';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  fbSaveForm!: FormGroup;

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

  ngOnInit() {
    this.fbSaveForm = this.fb.group({
      country: ['', Validators.required, currencyIndianValidator(/bob/i)],
      city: ''
    });

      this.fbSaveForm.get('country')?.valueChanges.subscribe(country => {
        const selectedCountry = this.countries.find(c => c.name === country);

        this.cities = selectedCountry? selectedCountry.cities : [];
        this.fbSaveForm.get('city')?.setValue('');
      });
  }

  saveForm() {
    this.http.post('fda', this.fbSaveForm).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    });
  }
}
