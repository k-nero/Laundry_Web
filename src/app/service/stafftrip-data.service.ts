import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StafftripDataService {
    private staffTripUrl = 'https://13.212.24.193/api/v1/staff-trips';

    constructor(private http: HttpClient) { }

    getStaffTrip() {
        return this.http.get(this.staffTripUrl);
    }
    /*    getOrderById(orderId: String): Observable<any> {
            const url = `${this.orderUrl}/${orderId}`;
            return this.http.get(url);
        }*/

}