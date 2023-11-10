import { Component, OnInit } from '@angular/core';
import {StafftripDataService} from "../service/stafftrip-data.service";
import {data} from "jquery";

@Component({
  selector: 'app-stafftrip',
  templateUrl: './stafftrip.component.html',
  styleUrls: ['./stafftrip.component.scss']
})
export class StafftripComponent implements OnInit {
  staffTripData: any;
  constructor(private stafftrip: StafftripDataService) { }

  ngOnInit(): void {
    this.stafftrip.getStaffTrip().subscribe((data) =>{
      this.staffTripData = data
      console.log(data)
    });
  }

}
