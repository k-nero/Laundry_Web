import { Component, OnInit } from '@angular/core';
import { BuildingDataService } from 'app/service/building-data.service';
import { KeyValue } from '@angular/common';
import {AddNewStoreComponent} from "../laundrystore/add-new-store/add-new-store.component";
import {MatDialog} from "@angular/material/dialog";
import {AddNewBuildingComponent} from "./add-new-building/add-new-building.component";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
  buildingData: any;
  selectedBuilding: any;

  constructor(
      private building: BuildingDataService,
      private _dialog: MatDialog,


  ) { }

  ngOnInit(): void {
    this.building.getBuilding().subscribe((data) => {
      this.buildingData = data
      console.log(data)
    });
  }
  viewDetail(buildingId: string): void {
    this.building.getBuildingById(buildingId).subscribe((data) => {
      this.selectedBuilding = data
      console.log(data)
    });
    window.location.href = "/admin/building/" + buildingId;
  }
  /*viewDetail(buildingId: string): void {
    this.building.getBuildingById(buildingId).subscribe((data) => {
      this.selectedBuilding = data
      console.log(data)
    });
    window.location.href = "/admin/laundrystore/" + buildingId;
  }*/
  deleteBuilding(id: string): void {
    this.building.deleteBuildingById(id).subscribe({
      next: (val: any) => {
        alert('Xóa thành công');
        this.ngOnInit();
      },
      error:(err: any) => {
        console.error(err);
      }
    })
    console.log('Delete store with id:', id);
  }

  openAddBuildingForm(){
    this._dialog.open(AddNewBuildingComponent);
  }
  protected readonly open = open;
}
