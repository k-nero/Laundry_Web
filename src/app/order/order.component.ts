import { Component, OnInit } from '@angular/core';
import { OrderDataService } from 'app/service/order-data.service';
import {AddNewBuildingComponent} from "../building/add-new-building/add-new-building.component";
import {MatDialog} from "@angular/material/dialog";
import {AddOrderComponent} from "./add-order/add-order.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderData: any;
  selectedOrder: any;


  constructor(
      private order: OrderDataService,
      private _dialog: MatDialog,


  ) { }

  ngOnInit(): void {
    this.order .getOrder().subscribe((data) => {
      this.orderData = data
      console.log(data)
    });
  }
  deleteOrderById(id: string): void {
    this.order.deleteOrderById(id).subscribe({
      next: (val: any) => {
        alert('Xóa thành công');
        location.reload();
      },
      error:(err: any) => {
        console.error(err);
      }
    })
    console.log('Delete store with id:', id);
  }
  viewDetail(orderId: string): void {
    this.order.getOrderById(orderId).subscribe((data) => {
      this.selectedOrder = data
      console.log(data)
    });
    window.location.href = "/admin/order/" + orderId;
  }
  openAddOrderForm(){
    this._dialog.open(AddOrderComponent);
  }
  protected readonly open = open;
}