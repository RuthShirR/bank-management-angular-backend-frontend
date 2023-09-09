import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperationService } from 'src/app/services/operation.service';

// This component provides a form to perform operations
@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.css']
})
export class OperationFormComponent {
    // Form properties
  operationForm: FormGroup;
  operationMessage: string = '';
  submitted: boolean = false;

  constructor(private operationService: OperationService, private formBuilder: FormBuilder) {
    this.operationForm = this.formBuilder.group({
      accountNumber: ['', [Validators.required, Validators.minLength(1)]],
      type: ['withdrawal', Validators.required],
      amount: [0, [Validators.required, Validators.min(0)]],
      interest: [0, Validators.min(0)],
      amountOfPayments: [0, Validators.min(0)]
    });
  }

 // Helper to get form controls
  get f() {
    return this.operationForm.controls;
  }
  
  // Performs the operation using the form data
  performOperation() {
    this.submitted = true;

    if (this.operationForm.invalid) {
      return;
    }

    const operationData = {
      accountNumber: this.operationForm.value['accountNumber'],
      type: this.operationForm.value['type'],
      amount: this.operationForm.value['amount'],
      interest: this.operationForm.value['interest'],
      amountOfPayments: this.operationForm.value['amountOfPayments']
    };

    this.operationService.performOperation(operationData).subscribe(
      (response) => {
        this.operationMessage = 'Operation performed successfully';
        console.log('Operation performed successfully:', response);
      },
      (error) => {
        this.operationMessage = 'Failed to perform operation';
        console.error('Failed to perform operation:', error);
      }
    );
  }
}

