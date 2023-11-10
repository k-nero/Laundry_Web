import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BuildingDataService} from "../../service/building-data.service";

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.scss']
})
export class BuildingDetailComponent implements OnInit {
  selectBuilding: any;
  selectedLaundryStore: any;
  constructor(
      private route: ActivatedRoute,
      private buildingDataService: BuildingDataService,
  ) { }

  ngOnInit(): void {
    this.getBuildingById();
  }

  getBuildingById(){
    const buildingId = this.route.snapshot.paramMap.get('id');
    this.buildingDataService.getBuildingById(buildingId).subscribe((building) => {
      this.selectBuilding = building;
      console.log(building);
    })
  }

  updateDetail(buildingId: string): void {
    this.buildingDataService.getBuildingById(buildingId).subscribe((data) => {
      this.selectedLaundryStore = data
      console.log(data)
    });
    window.location.href = "/admin/building/update/" + buildingId;
  }
}
