import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-user-building',
  templateUrl: './user-building.component.html',
  styleUrls: ['./user-building.component.scss']
})
export class UserBuildingComponent implements OnInit {

  private url = 'https://13.212.24.193/api/v1/customers';
  buildings: any;
  selectedOption: string;
  applicationUserId = localStorage.getItem('id');


  isCustomer() {

    return this.http.get(`${this.url}?user-id=${this.applicationUserId}`).subscribe((response: any) => {
      console.log(response);

      if (response.data.items[0].building == undefined) {
        console.log('Do nothing');
      } else {
        window.location.href = '/homepage'
      }
    });

  }





  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.showBuilding();
    this.isCustomer();
  }

  logSelectedOption() {
    console.log("Selected Option:", this.selectedOption.toString());
    // You can perform further actions with the selected option here
  }
  showBuilding() {
    this.http.get(this.url).subscribe(
      (data) => {
        this.buildings = data; // Assign the data to the 'buildings' property
        console.log('Buildings:', this.buildings);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onSubmit(orderForm: NgForm) {

    const requestBody = {
      applicationUserID: this.applicationUserId,
      buildingID: orderForm.value.laundryStore
    }

    return this.http.post(this.url, requestBody).subscribe((response) => {
      window.location.href = '/homepage'

    }, (error) => {
      console.log('Error: ' + error);

    })


  }
}
