import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  name = localStorage.getItem('fullname');
  
  constructor() { }

  ngOnInit(): void {
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

  logout() {
    console.log('ok');
    localStorage.clear();
    window.location.href = "/";
  }
}
