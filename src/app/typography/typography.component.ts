import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'app/service/store.service';

// declare interface TableData {
//   headerRow: string[];
//   dataRows: string[][];
// }


interface Store {
  name: string;
  address: string;
  status: boolean;
}

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
  providers: [StoreService]
})

export class TypographyComponent implements OnInit, OnDestroy {
  stores: any;



  constructor(private storeSerive: StoreService) { }

  ngOnInit() {
    this.storeSerive.fetchStoreData().subscribe((data: any) => {
      this.stores = data
      console.log(data);
    })
  }

  ngOnDestroy() {

  };



}


