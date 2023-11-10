import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { OrderDataService } from "../../service/order-data.service";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  orderForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _orderService: OrderDataService,
    private _dialogRef: MatDialogRef<AddOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.orderForm = this._fb.group({
      customerId: '',
      staffId: '',
      laundryStoreId: '',
      orderDate: '',
      deliveryTimeFrame: '',
      expectedFinishDate: '',
      paymentType: '',
      amount: '',
      totalPrice: '',
      address: '',
    })
  }

  ngOnInit(): void {
  }
  onFormSubmit() {
    if (this.orderForm.valid) {
      this._orderService.createOrder(this.orderForm.value).subscribe({
        next: (val: any) => {
          alert('Thêm thành công');
          this._dialogRef.close(true);
          location.reload();
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }
}
