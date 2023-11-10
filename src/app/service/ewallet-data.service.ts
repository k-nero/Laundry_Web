import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaundrystoreDataService {
  private ewalletUrl = 'https://13.212.24.193/api/v1/wallet';

  constructor(private http: HttpClient) { }


}