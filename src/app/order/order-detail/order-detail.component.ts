import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderDataService} from "../../service/order-data.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  selectOrder: any;
  selectedOrder: any;
  constructor(
      private route: ActivatedRoute,
      private orderDataService: OrderDataService
  ) { }

  ngOnInit(): void {
    this.getOrderById();
  }
  getOrderById() {
    const orderId = this.route.snapshot.paramMap.get('id');
    this.orderDataService.getOrderById(orderId).subscribe((laundry) => {
      this.selectOrder = laundry;
      console.log(laundry);
    })
  }

  updateDetail(orderId: string): void {
    this.orderDataService.getOrderById(orderId).subscribe((data) => {
      this.selectedOrder = data
      console.log(data)
    });
    window.location.href = "/admin/laundrystore/update/" + orderId;
  }
}
