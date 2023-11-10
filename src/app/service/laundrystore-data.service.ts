import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaundrystoreDataService {
  private laundryStoreUrl = 'https://13.212.24.193/api/v1/laundry-stores/';




  constructor(private http: HttpClient) { }

  getLaundryStore() {
    return this.http.get(this.laundryStoreUrl);
  }
  getLaundryStoreById(laundryStoreId: String): Observable<any> {
    // const url = `https://13.212.24.193/api/v1/laundry-store/${laundryStoreId}`;
    return this.http.get(this.laundryStoreUrl + laundryStoreId);
  }
  deleteStore(laundryStoreId: String) {
    // return this.http.delete(`https://13.212.24.193/api/v1/laundry-store/${id}`);
    return this.http.delete(this.laundryStoreUrl + laundryStoreId);

  }

  addStore(data: any): Observable<any> {
    // return this.http.post('https://13.212.24.193/api/v1/laundry-store', data);
    return this.http.post(this.laundryStoreUrl, data);

  }

  updateStore(laundryStoreId: string, data: any): Observable<any> {
    return this.http.put(this.laundryStoreUrl + laundryStoreId, data);
  }


}




