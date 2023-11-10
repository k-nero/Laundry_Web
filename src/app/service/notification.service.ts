import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotificationService {


    constructor(private http: HttpClient) {

    }


    fetchNotificationData() {
        return this.http.get('https://6517671f582f58d62d34f3b3.mockapi.io/api/v1/order', { responseType: 'json' });
    }



}