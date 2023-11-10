import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  private customerUrl = 'https://13.212.24.193/api/v1/customers/';
  constructor(private http: HttpClient) { }

  getCustomer() {

    return this.http.get(this.customerUrl);
  }
  addCustomer(item): Observable<any> {
    return this.http.post(this.customerUrl, item)
  }
  getCustomerById(customerId: String): Observable<any> {
    return this.http.get(this.customerUrl + customerId);
  }
  deleteCustomerById(customerId: String): Observable<any> {
    return this.http.delete(this.customerUrl + customerId);
  }
}