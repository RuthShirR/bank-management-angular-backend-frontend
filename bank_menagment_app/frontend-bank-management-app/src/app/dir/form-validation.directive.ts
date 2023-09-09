import { Directive, Input, ElementRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, Validators } from '@angular/forms';

// This directive enhances form controls with custom validation logic
@Directive({
  selector: '[appFormValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FormValidationDirective,
      multi: true
    }
  ]
})
export class FormValidationDirective implements Validator {
    // Input property to determine the type of validation to apply
  @Input('appFormValidation') validationType: string = '';

  constructor(private el: ElementRef) {}

  validate(control: AbstractControl): { [key: string]: any } | null {
 // Initially, remove the 'is-invalid' class
    const inputElement = this.el.nativeElement as HTMLInputElement;
    inputElement.classList.remove('is-invalid');

        // Depending on the validation type, apply the respective check
    switch (this.validationType) {
      case 'required':
        if (Validators.required(control)) {
          inputElement.classList.add('is-invalid');
          inputElement.focus();
          return { 'required': true };
        }
        break;
      case 'minlength':
        if (Validators.minLength(1)(control)) {
          inputElement.classList.add('is-invalid');
          inputElement.focus();
          return { 'minlength': true };
        }
        break;
      case 'min':
        if (Validators.min(0)(control)) {
          inputElement.classList.add('is-invalid');
          inputElement.focus();
          return { 'min': true };
        }
        break;
      default:
        break;
    }

    return null; 
  }
}





