import { Component, OnInit } from '@angular/core';
import { PaymentDataService} from "../service/payment-data.service";
import {data} from "jquery";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentData: any;
  constructor(private payment: PaymentDataService) { }

  ngOnInit(): void {
  this.payment .getPayment().subscribe((data) => {
    this.paymentData = data
    console.log(data)
    });
  }

}
