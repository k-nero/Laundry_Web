import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from 'app/service/customer-data.service';
import {MatDialog} from "@angular/material/dialog";
import {AddCustomerComponent} from "./add-customer/add-customer.component";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnInit {
  customerData: any;
  selectedCustomer: any;

  constructor(
      private customer: CustomerDataService,
      private _dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.customer.getCustomer().subscribe((data) => {
      this.customerData = data
      console.log(data)
    });
  }
  viewDetail(customerId: string): void {
    this.customer.getCustomerById(customerId).subscribe((data) => {
      this.selectedCustomer = data
      console.log(data)
    });
    window.location.href = "/admin/customer/" + customerId;
  }

  deleteCustomer(id: string): void {
    this.customer.deleteCustomerById(id).subscribe({
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
/*  add() {
    let item = {
      "buildingId": "testt ",
      "applicationUserId": "222"
    }
    this.customer.add(item).subscribe()
  }*/
  openLinkCustomerForm(){
    this._dialog.open(AddCustomerComponent);
  }
  protected readonly open = open;
}
