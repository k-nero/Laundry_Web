import { Component, OnInit } from '@angular/core';
import { UserManagementDataService } from "../service/user-management-data.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {
  userData: any;
  selectedUser: any;

  constructor(
    private _user: UserManagementDataService,
    private _dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    this._user.getUser().subscribe((data) => {
      this.userData = data
      console.log(data)
    });
  }
  viewDetail(userId: string): void {
    this._user.getUserById(userId).subscribe((data) => {
      this.selectedUser = data
      console.log(data)
    });
    window.location.href = "/admin/userManagement/" + userId;
  }

  deleteUser(id: string): void {
    this._user.deleteUserById(id).subscribe({
      next: (val: any) => {
        alert('Xóa thành công');
        location.reload();
      },
      error: (err: any) => {
        console.error(err);
      }
    })
    console.log('Delete User with id:', id);
  }
}
