import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { UpdateStoreComponent } from "../update-store/update-store.component";
import { LaundrystoreDataService } from "../../service/laundrystore-data.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss']
})
export class StoreDetailComponent implements OnInit {
  selectLaundry: any;
  selectedLaundryStore: any;

  constructor(
    private _dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private laundrystoreDataService: LaundrystoreDataService

  ) {
  }
  ngOnInit(): void {
    this.getLaundryStoreById();
  }

  updateDetail(laundryStoreId: string): void {
    this.laundrystoreDataService.getLaundryStoreById(laundryStoreId).subscribe((data) => {
      this.selectedLaundryStore = data
      console.log(data)
    });
    // window.location.href = "/admin/laundrystore/update/" + laundryStoreId;
    this.router.navigate(['/admin/laundrystore/update', laundryStoreId]);
  }
  getLaundryStoreById() {
    const laundryId = this.route.snapshot.paramMap.get('id');
    this.laundrystoreDataService.getLaundryStoreById(laundryId).subscribe((laundry) => {
      this.selectLaundry = laundry;
      console.log(laundry);
    })
  }
}
