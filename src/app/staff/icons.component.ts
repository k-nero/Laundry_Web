import { Component, OnInit } from '@angular/core';
import { StaffDataService } from 'app/service/staff-data.service';
import { KeyValue } from '@angular/common';
import {OrderDataService} from "../service/order-data.service";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  staffData: any;
  selectedStaff: any;

  constructor(
      private staff: StaffDataService,
      private staffDataService: StaffDataService,

  ) { }

  ngOnInit(): void {
    this.staff.getStaff().subscribe((data) => {
      this.staffData = data
      console.log(data)
    });
  }
  viewDetail(staffId: string): void {
    this.staff.getStaffById(staffId).subscribe((data) => {
      this.selectedStaff = data
      console.log(data)
    });
    window.location.href = "/admin/order/" + staffId;
  }
  deleteStaffById(id: string): void {
    this.staff.deleteStaffById(id).subscribe({
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
}
