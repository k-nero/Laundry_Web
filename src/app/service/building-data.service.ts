import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BuildingDataService {
  private buildingUrl = 'https://13.212.24.193/api/v1/buildings/';

  constructor(private http: HttpClient) { }

  getBuilding() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMjY2ZDFlMC1lNWFmLTQ3NGQtYjYzYi1hZGNhZmFiY2ZhMWUiLCJlbWFpbCI6InZvZGluaHF1eWVuMTEyQGdtYWlsLmNvbSIsImlkIjoiZDEzYjNiZGEtMmNlNC00NTVmLTk5ZGMtY2ZmYzdlZjA5ZjgwIiwicm9sZXMiOiJBZG1pbiIsImV4cCI6MTY5NzAyMTg0OCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzIyMCIsImF1ZCI6IlVzZXIifQ.p6KAoEZdjPk2YIAR6r5cmi5344MVNB_8-ZmJFmPITIw`
    })

    return this.http.get(this.buildingUrl, { headers: headers })
  }
  addNewBuilding(data: any): Observable<any>{
    return this.http.post(this.buildingUrl, data);
  }
  getBuildingById(buildingId: String): Observable<any> {

    return this.http.get(this.buildingUrl + buildingId);
  }

  deleteBuildingById(buildingId: String): Observable<any> {
    return this.http.delete(this.buildingUrl + buildingId);
  }
  updateBuilding(buildingId: string, data: any):Observable<any>{
    return this.http.put(this.buildingUrl + buildingId, data);
  }
}