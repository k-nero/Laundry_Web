import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderDataService {
    private orderUrl = 'https://13.212.24.193/api/v1/orders/';

    private orderId: string;

    setOrderId(orderId: string) {
        this.orderId = orderId;
    }

    getOrderId() {
        return this.orderId;
    }

    constructor(private http: HttpClient) { }

    getOrder() {
        return this.http.get(this.orderUrl);
    }
    getOrderById(orderId: String): Observable<any> {
        return this.http.get(this.orderUrl + orderId);
    }
    createOrder(item: any): Observable<any> {
        // Define the request body with the required fields
        const requestBody = {
            "customerId": item.customerId,
            "staffId": item.staffId,
            "laundryStoreId": item.laundryStoreId,
            "orderDate": item.orderDate,
            "deliveryTimeFrame": item.deliveryTimeFrame,
            "expectedFinishDate": item.expectedFinishDate,
            "paymentType": item.paymentType,
            "amount": item.amount,
            "totalPrice": item.totalPrice,
            "address": item.address
        };

        return this.http.post(this.orderUrl, requestBody);
    }

    deleteOrderById(orderId: String): Observable<any> {
        return this.http.delete(this.orderUrl + orderId);
    }

}