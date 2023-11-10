import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PaymentDataService {
    private paymentUrl = 'https://13.212.24.193/api/v1/payment';

    constructor(private http: HttpClient) { }

    getPayment() {
        return this.http.get('https://13.212.24.193/api/v1/payments');
    }
    /*    getOrderById(orderId: String): Observable<any> {
            const url = `${this.orderUrl}/${orderId}`;
            return this.http.get(url);
        }*/

}