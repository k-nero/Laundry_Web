import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  name = localStorage.getItem('fullname');

  id = localStorage.getItem('id');

  getCustomerId() {
    console.log(this.id);
    return this.http.get(`https://13.212.24.193/api/v1/customers?user-id=${this.id}`).subscribe((response: any) => {
      localStorage.setItem('customerId', response.data.items[0].id);
      console.log('detail: ' + response.data.items[0].id);

    });
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCustomerId();
  }

  goToOrder(): void {
    window.location.href = "/method"; // Thay đổi '/previous-page' bằng đường dẫn thực tế của trang trước đó
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
