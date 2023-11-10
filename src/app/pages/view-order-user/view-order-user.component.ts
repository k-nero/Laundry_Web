import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-order-user',
  templateUrl: './view-order-user.component.html',
  styleUrls: ['./view-order-user.component.scss']
})
export class ViewOrderUserComponent implements OnInit {
  responseData: any;

  order: any
  orderHistory: any

  constructor(private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // Use the id to call your API or perform any other actions
        this.getUserOrderById(id);
      }
    });
  }

  getUserOrderById(id: any) {
    const apiUrl = `https://13.212.24.193/api/v1/orders/${id}/order-histories`;



    return this.http.get(apiUrl).subscribe((response: any) => {
      this.order = response.data.items[0].order;
      this.orderHistory = response.data.items[0];
      console.log(response);
    });


  }

  goToHome() {
    window.location.href = "/profile";
  }

  getPaymentMethod(paymentType: number): string {
    switch (paymentType) {
      case 0:
        return "Cash";
      case 1:
        return "PayPal";
      default:
        return "Unknown"; // Handle other values as needed
    }
  }

  getOrderStatus(orderStatus: number): string {
    switch (orderStatus) {
      case 0:
        return "Preparing";
      case 1:
        return "Processing";
      case 2:
        return "Completed";
      case 3:
        return "Cancelled";
      default:
        return "Unknown"; // Handle other values as needed
    }
  }

  getTimeFrameDescription(timeFrame: number): string {
    switch (timeFrame) {
      case 0:
        return "Morning";
      case 1:
        return "Afternoon";
      case 2:
        return "Night";
      default:
        return "Unknown"; // Handle other values as needed
    }
  }

}
