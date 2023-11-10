import { Component, OnInit } from '@angular/core';
import { LaundrystoreDataService } from 'app/service/laundrystore-data.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-store',
  templateUrl: './view-store.component.html',
  styleUrls: ['./view-store.component.scss']
})
export class ViewStoreComponent implements OnInit {
  selectLaundry: any;
  constructor(private route: ActivatedRoute, private laundrystore: LaundrystoreDataService) { }

  ngOnInit(): void {
    this.getLaundryStoreById();
  }
  getLaundryStoreById() {
    const laundryId = this.route.snapshot.paramMap.get('id');
    this.laundrystore.getLaundryStoreById(laundryId).subscribe((laundry) => {
      this.selectLaundry = laundry;
      console.log(laundry);
    })
  }
}
