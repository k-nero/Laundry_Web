import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderhistoryDataService {
    private orderHistoryUrl = 'https://13.212.24.193/api/v1/order-historys/';

    constructor(private http: HttpClient) { }

    getOrderHistory() {
        return this.http.get(this.orderHistoryUrl);
    }
    /*    getOrderById(orderId: String): Observable<any> {
            const url = `${this.orderUrl}/${orderId}`;
            return this.http.get(url);
        }*/

}