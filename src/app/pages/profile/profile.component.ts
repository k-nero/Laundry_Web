import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewOrderUserComponent } from '../view-order-user/view-order-user.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name = localStorage.getItem('fullname');
  email = localStorage.getItem('email');
  ewallet = localStorage.getItem('ewallet');
  avatar = localStorage.getItem('avatar');

  customerId = localStorage.getItem('customerId');

  id = localStorage.getItem('id');

  userOrders: any[] = [];

  private orderUrl = `https://13.212.24.193/api/v1/orders?customer-id=${this.customerId}`;



  getUserOrder() {

    return this.http.get(this.orderUrl).subscribe((response: any) => {
      this.userOrders = response.data.items;
      console.log(response);
    });
  }


  getCustomerId() {
    console.log(this.id);
    return this.http.get(`https://13.212.24.193/api/v1/customers?user-id=${this.id}`).subscribe((response: any) => {
      localStorage.setItem('customerId', response.data.items[0].id);
      console.log('detail: ' + response.data.items[0].id);

    });
  }


  constructor(private dialog: MatDialog, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // this.getCustomerId();
    this.getUserOrder();
  }

  goToOrder(): void {
    window.location.href = "/order"; // Thay đổi '/previous-page' bằng đường dẫn thực tế của trang trước đó
  }

  goToHome(): void {
    window.location.href = "/homepage"; // Thay đổi '/previous-page' bằng đường dẫn thực tế của trang trước đó
  }

  goToAbout(): void {
    window.location.href = "/about";
  }

  goToProfile(): void {
    window.location.href = "/profile";
  }

  logout() {
    console.log('ok');
    localStorage.clear();
    window.location.href = "/";
  }

  // openOrderPopup() {
  //   this.dialog.open(ViewOrderUserComponent);
  // }

  viewOrderDetails(id: any) {

    this.router.navigate(['view-order', id]);
  }



}
