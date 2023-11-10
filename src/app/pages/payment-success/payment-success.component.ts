import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDataService } from '../../service/order-data.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {

  orderId: string;

  private url = 'https://13.212.24.193/api/v1/orders';

  orderDetails: any;





  getDeliveryTimeFrameString(value: number): string {
    if (value === 0) {
      return 'Morning';
    } else if (value === 1) {
      return 'Afternoon';
    } else if (value === 2) {
      return 'Night';
    }
    return 'Unknown'; // You can specify a default value or handle other cases as needed
  }


  goToHomePage() {
    window.location.href = '/homepage'
  }

  goToProfile() {
    window.location.href = '/profile'
  }

  constructor(private http: HttpClient, private orderService: OrderDataService) { }

  ngOnInit(): void {
    this.orderId = this.orderService.getOrderId();
    console.log(this.orderId);

    this.getOrderDetail();
  }

  getOrderDetail() {
    return this.http.get(`${this.url}/${this.orderId}`).subscribe((response: any) => {
      this.orderDetails = response;
      console.log(response)
    })
  }


}
