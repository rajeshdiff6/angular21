import { AbstractControl, ValidationErrors } from "@angular/forms";
import { config } from "rxjs";

export function currencyIndianValidator(inr: RegExp) {
    return (control: AbstractControl): ValidationErrors | null => {
        return inr.test(control.value) ? null : { invalidCurrency: true };
    };
}