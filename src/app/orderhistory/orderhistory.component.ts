import { Component, OnInit } from '@angular/core';
import { OrderhistoryDataService } from 'app/service/orderhistory-data.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {
  orderHistoryData: any;

  constructor(
      private orderhistory: OrderhistoryDataService
  ) { }

  ngOnInit(): void {
    this.orderhistory .getOrderHistory().subscribe((data) => {
      this.orderHistoryData = data
      console.log(data)
    });
  }
}
