import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StaffDataService {
  private staffUrl = 'https://13.212.24.193/api/v1/staffs/';

  constructor(private http: HttpClient) { }

  getStaff(){
    return this.http.get(this.staffUrl);
  }
  getStaffById(staffId: String): Observable<any> {
    return this.http.get(this.staffUrl + staffId);
  }
  deleteStaffById(staffId: String): Observable<any> {
    return this.http.delete(this.staffUrl + staffId);
  }
}