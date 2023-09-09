import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
    // Base URL for our backend API
  private apiUrl = 'http://localhost:4000/api/v1/bank/operations';

  constructor(private http: HttpClient) {}

    // Fetch operations for a specific account
  getOperations(accountNumber: string): Observable<any[]> {
    const url = `${this.apiUrl}/${accountNumber}`;
    return this.http.get<any[]>(url);
  }

    // Perform a new operation
  performOperation(operationData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, operationData);
  }
}
