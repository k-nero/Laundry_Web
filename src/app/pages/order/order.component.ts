
import { OrderDataService } from '../../service/order-data.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'app/service/payment.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  quantity: number = 0;
  paymentOption: string = 'full';
  paymentMethod: string;
  ewallet = localStorage.getItem('ewallet');
  name = localStorage.getItem('fullname');
  orderForm: any;

  deliveryTime: string;

  estimatedCompletionTime: string;

  laundryStores: { name: string, id: string }[] = [
    { name: "Bao Son", id: "baoson123" },
    { name: "Cari19", id: "cari19abc" },
    { name: "Tomas", id: "tomasxyz" },
    { name: "Scottie784", id: "scottie784" },
    { name: "Alan7", id: "alan7def" },
    { name: "Laurie1", id: "laurie1ghi" }
  ];

  selectedLaundryStore: string; // Store the selected laundry store name here

  address: string;
  returnTime: number;

  ewalletId: any;



  private baseUrl = 'https://13.212.24.193/api/v1/customers';

  private orderUrl = 'https://13.212.24.193/api/v1/orders';

  private eWalletUrl = `https://13.212.24.193/api/v1/wallets/`;

  buildingAddress: any;

  paymentOptionPal: string = 'full';
  quantityPal: number = 0;

  amount: number;

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  getCustomer() {
    const id = localStorage.getItem('id');
    // console.log('local id: ' + id);


    const url = `${this.baseUrl}?user-id=${id}`;
    return this.http.get(url).subscribe((response: any) => {
      console.log(response);

      this.buildingAddress = response.data.items[0].building.address;
      this.ewalletId = response.data.items[0].applicationUser.wallet.id;
      localStorage.setItem('ewalletId', this.ewalletId);
      localStorage.setItem('customerId', response.data.items[0].id);
    });
  }


  // getCustomerId() {


  //   return this.http.get(`https://13.212.24.193/api/v1/customers?user-id=${this.id}`).subscribe((response: any) => {
  //     console.log(response);
  //   })

  // }


  // Inside your component class
  calculateReturnTimeValue(selectedOption: string): number {
    if (selectedOption === 'morning') {
      return 0;
    } else if (selectedOption === 'afternoon') {
      return 1;
    } else if (selectedOption === 'evening') {
      return 2;
    }
    return -1; // Return -1 for an invalid selection (optional)
  }

  accessReturnTimeValue() {
    console.log("Return Time Numeric Value:", this.returnTime);
  }


  accessAddress() {
    console.log("Address:", this.address);
  }
  calculateEstimatedCompletionTime() {
    const deliveryTimeInput = <HTMLInputElement>document.getElementById('deliveryTimeInput');
    const estimatedCompletionTimeInput = <HTMLInputElement>document.getElementById('estimatedCompletionTimeInput');

    // Lấy thời gian đặt giao từ trường input
    const deliveryTime = new Date(deliveryTimeInput.value);

    // Thêm 3 giờ
    deliveryTime.setHours(deliveryTime.getHours() + 10);

    // Định dạng thời gian dự kiến hoàn thành
    const formattedEstimatedCompletionTime = deliveryTime.toISOString().slice(0, 16);

    // Gán giá trị thời gian dự kiến hoàn thành cho trường input tương ứng
    estimatedCompletionTimeInput.value = formattedEstimatedCompletionTime;

    console.log("Delivery Time:", this.deliveryTime);
  }


  accessEstimatedCompletionTime() {
    console.log("Estimated Completion Time:", this.estimatedCompletionTime);
  }

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
    // Kiểm tra xem `ewallet` có tồn tại và có đủ tiền để thanh toán
    if (this.paymentMethod === 'card') {
      // Kiểm tra xem `ewallet` có tồn tại và có đủ tiền để thanh toán
      if (this.ewallet && Number(this.ewallet) >= totalAmount) {
        console.log("Thanh toán thành công");
        // Thực hiện các hành động liên quan đến thanh toán từ ewallet
      } else {
        console.log('Lỗi: Số dư không đủ để thanh toán.');
        // Hiển thị thông báo lỗi hoặc thực hiện các hành động khác tùy theo yêu cầu.
      }
    } else if (this.paymentMethod === 'cash') {
      // Thực hiện thanh toán trực tiếp, không cần kiểm tra ewallet
      console.log('Thanh toán trực tiếp.');
      // window.location.href = "/payment";
      // Thực hiện các hành động liên quan đến thanh toán trực tiếp
    } else {
      console.log('Chọn phương thức thanh toán khác ewallet hoặc trực tiếp.');
      // Hiển thị thông báo hoặc thực hiện các hành động khác tùy theo yêu cầu.
    }
  }

  constructor(private order: OrderDataService, private http: HttpClient, private router: Router, private payment: PaymentService) {
  }


  ngOnInit(): void {
    this.getCustomer();

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
          console.log(details);
          const requestBody =
          {
            paymentID: '01321',
            walletID: localStorage.getItem('ewalletId'),
            paymentType: 1,
            transactionType: 0,
            amount: this.amount,
            status: 0,
            description: "Paypal"
          }

          console.log(requestBody);


          return this.http.post('https://13.212.24.193/deposite-wallet', requestBody).subscribe((response) => {
            console.log(response);
            console.log('success');
            // window.location.href = '/success';
          });




        })
      },
      onError: (error: any) => {
        console.log('Error: ' + error);
      }
    }).render(this.paymentRef.nativeElement)

    // this.getCustomerId();


  }

  goToOrder(): void {
    window.location.href = "/order"; // Thay đổi '/previous-page' bằng đường dẫn thực tế của trang trước đó
  }
  goToHome(): void {
    window.location.href = "/homepage"; // Thay đổi '/previous-page' bằng đường dẫn thực tế của trang trước đó
  }
  goToAbout(): void {
    window.location.href = "/about"; // Thay đổi '/previous-page' bằng đường dẫn thực tế của trang trước đó
  }
  goToProfile(): void {
    window.location.href = "/profile"; // Thay đổi '/previous-page' bằng đường dẫn thực tế của trang trước đó
  }


  onSubmit(orderForm: NgForm) {

    const customer_id = localStorage.getItem('customer_id');

    orderForm.value.address = this.buildingAddress;

    const requestBody = {
      customerId: customer_id,
      staffId: "",
      laundryStoreId: orderForm.value.laundryStore,
      orderDate: orderForm.value.deliveryTime,
      deliveryTimeFrame: orderForm.value.returnTime,
      expectedFinishDate: orderForm.value.estimatedCompletionTime,
      paymentType: orderForm.value.paymentMethod,
      amount: orderForm.value.quantity,
      totalPrice: this.calculateTotalAmount(),
      address: orderForm.value.address

    }

    return this.http.post(this.orderUrl, requestBody).subscribe((response: any) => {
      if (response.statusCode == 201)
        console.log(response);
      this.order.setOrderId(response.data);

      this.router.navigate(['/success']);
      // console.log('success');

      // window.location.href = '/success'
    }, (err: any) => {
      console.log(err);
    });
  }


  logout() {
    localStorage.clear();
    window.location.href = '/';
  }

}

