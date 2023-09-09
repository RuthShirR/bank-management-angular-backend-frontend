import { Component } from '@angular/core';
import { OperationService } from 'src/app/services/operation.service';

// This component displays a list of operations
@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css'],
})
export class OperationListComponent {
    // Account number and the list of operations associated with it
  accountNumber: string = '';
  operations: any[] = [];

  constructor(private operationService: OperationService) {}

  // Fetches operations associated with the provided account number
  getOperations() {
    this.operationService.getOperations(this.accountNumber).subscribe(
      (response) => {
        this.operations = response;
      },
      (error) => {
        console.error('Failed to fetch operations:', error);
      }
    );
  }

    // Groups operations by their type
  getOperationGroups() {
    const operationGroups: any[] = [];
    const groupedOperations: any = {};

    this.operations.forEach((operation) => {
      if (!groupedOperations[operation.type]) {
        groupedOperations[operation.type] = [];
      }
      groupedOperations[operation.type].push(operation);
    });

    for (const type in groupedOperations) {
      operationGroups.push({
        type: type,
        operations: groupedOperations[type],
        active: false,
      });
    }

    return operationGroups;
  }

    // Sets the active tab/group in the UI
  selectTab(operationGroup: any) {
    this.getOperationGroups().forEach((group) => (group.active = false));
    operationGroup.active = true;
  }
}




