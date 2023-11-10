import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LaundrystoreDataService} from "../../service/laundrystore-data.service";
import {BuildingDataService} from "../../service/building-data.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-building',
  templateUrl: './update-building.component.html',
  styleUrls: ['./update-building.component.scss']
})
export class UpdateBuildingComponent implements OnInit {
  selectBuilding: any;

  updateBuildingForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    description: new FormControl(''),
  })
  constructor(
      private route: ActivatedRoute,
      private _buildingStoreService: BuildingDataService,

  ) { }

  ngOnInit(): void {
    // this.getBuildingById()
    const buildingId = this.route.snapshot.paramMap.get('id');
    this._buildingStoreService.getBuildingById(buildingId).subscribe((building) => {
      this.updateBuildingForm = new FormGroup({
        name: new FormControl(building.data.name),
        address: new FormControl(building.data.address),
        description: new FormControl(building.data.description),
      })
      console.log(building);
    })
  }

  getBuildingById() {
    const buildingId = this.route.snapshot.paramMap.get('id');
    this._buildingStoreService.getBuildingById(buildingId).subscribe((building) => {
      this.selectBuilding = building;
      console.log(building);
    })
  }
  updateBuildingById(){
    const buildingId = this.route.snapshot.paramMap.get('id');
    if(this.updateBuildingForm.valid){
      this._buildingStoreService.updateBuilding(buildingId, this.updateBuildingForm.value).subscribe({
        next: (val: any) => {
          alert('Sửa thành công');
          location.reload();
        },
        error:(err: any) => {
          console.error(err);
        }
      })
    }
  }
}
