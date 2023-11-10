import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'app/service/payment.service';
import { OrderDataService } from 'app/service/order-data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentOption: string = 'full';
  quantity: number = 0;

  amount: number;
  orderId: string;

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  calculateTotalAmount(): number {
    if (this.quantity && this.quantity > 0) {
      const pricePerItem: number = 15.00; // Giả sử giá là $15.00
      return this.paymentOption === 'full' ? this.quantity * pricePerItem : (this.quantity * pricePerItem) / 2;
    }
    return 0;
  }

  submitCashPaymentForm() {
    // Thêm logic xử lý khi người dùng nộp form, ví dụ: gọi API thanh toán
    const totalAmount = this.calculateTotalAmount();
    console.log(`Thanh toán thành công: ${totalAmount}`);
  }

  constructor(private router: Router, private payment: PaymentService, private orderService: OrderDataService) {
    this.orderId = orderService.getOrderId();
  }



  ngOnInit(): void {
    this.amount = this.payment.totalAmount;
    window.paypal.Buttons({
      style: {
        layout: 'horizontal',
        color: 'blue',
        shape: 'rect',
        label: 'paypal'
      },
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                // value: this.amount.toString(),
                value: this.amount.toString(),
                currency_code: 'USD',
              }
            }
          ]
        })
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          console.log(details.id);

        })
      },
      onError: (error: any) => {
        console.log('Error: ' + error);
      }
    }).render(this.paymentRef.nativeElement)

  }



  goBack(): void {
    this.router.navigate(['/order']); // Thay đổi '/previous-page' bằng đường dẫn thực tế của trang trước đó
  }


}
