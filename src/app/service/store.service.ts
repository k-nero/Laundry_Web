import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoreService {


    constructor(private http: HttpClient) { }


    fetchStoreData() {
        return this.http.get('https://13.212.24.193/api/laundry-store', { responseType: 'json' });
    }


/*    addStore() {
        return this.http.post('https://13.212.24.193/api/laundry-store', {
            "storename": 'asddasad',
            "address": 'sdadsada',
            "startTime": 'sadas',
            "endTime": 'asdads',
            "status": true
        });
    }*/



    updateStore() {
        return this.http.put('https://13.212.24.193/api/laundry-store', { responseType: 'json' });
    }


    deleteStore() {
        return this.http.delete('https://13.212.24.193/api/laundry-store', { responseType: 'json' });
    }








}