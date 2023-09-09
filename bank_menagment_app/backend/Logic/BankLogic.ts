import AccountOperation from '../Models/AccountOperation';

// Function to get all operations for a specific account number
export function getAllOperations(accountNumber: string): Promise<any[]> {
  return AccountOperation.find({ accountNumber }).exec();
}

// Function to add a new operation to the database
export function addOperation(operationData: any): Promise<any> {
  const operation = new AccountOperation(operationData);
  return operation.save();
}


