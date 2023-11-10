import { Component, Inject, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LaundrystoreDataService } from "../../service/laundrystore-data.service";
import { ActivatedRoute } from "@angular/router";
import { UserManagementDataService } from "../../service/user-management-data.service";
import { HttpClient } from '@angular/common/http';

interface User {
  name: string;
  value: string;
}
@Component({
  selector: 'app-add-new-store',
  templateUrl: './add-new-store.component.html',
  styleUrls: ['./add-new-store.component.scss']
})
export class AddNewStoreComponent implements OnInit {
  storeForm: FormGroup;
  selectUser: any;

  private url = 'https://13.212.24.193/api/v1/laundry-stores';
  private identityUrl = 'https://13.212.24.193/api/v1/laundry-stores';


  getApplicationUserId() {


  }

  addStore() {
    const id = localStorage.getItem('id');

    if (this.storeForm.valid) {
      const formData = this.storeForm.value;

      // Access values from individual form controls
      const email = formData.email;
      const name = formData.name;
      const address = formData.address;
      const startTime = formData.startTime;
      const endTime = formData.endTime;

      // Now you have access to these values, and you can use them as needed.
      console.log('Email:', email);
      console.log('Name:', name);
      console.log('Address:', address);
      console.log('Start Time:', startTime);
      console.log('End Time:', endTime);

      const requestBody =
      {
        applicationUserID: "string",
        name: "string",
        address: "string",
        startTime: '',
        endTime: '',
        status: true
      }



      // return this.http.post('https://13.212.24.193/api/v1/laundry-stores', requestBody).subscribe((response) => {
      //   console.log(response);

      // })


      // Add your API call or other logic here.
    } else {
      // Handle form validation errors or display a message to the user.
    }

  }



  /*status: string[] =[
  'Hoạt động',
  'Ngưng hoạt động',
  ];*/
  constructor(

    private _fb: FormBuilder,
    private _storeService: LaundrystoreDataService,
    private _dialogRef: MatDialogRef<AddNewStoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute,
    private _userManagementDataService: UserManagementDataService,
    private http: HttpClient

  ) {
    this.storeForm = this._fb.group({
      applicationUserID: '',
      name: '',
      address: '',
      startTime: '',
      endTime: '',
      status: 'true',
    });
  }

  ngOnInit(): void {
    this._userManagementDataService.getUser().subscribe((user) => {
      this.selectUser = user;

      console.log(user);


    });
  }

  getUserById(userId: string) {
    this._userManagementDataService.getUserById(userId).subscribe((user) => {
      this.selectUser = user;
      console.log(user);
    })
  }
  getUserBy() {
    this._userManagementDataService.getUser().subscribe((user) => {
      this.selectUser = user;
      console.log(user);
    })
  }
  onFormSubmit() {
    if (this.storeForm.valid) {
      this._storeService.addStore(this.storeForm.value).subscribe({
        next: (val: any) => {
          alert('Thêm thành công');
          this._dialogRef.close(true);
          location.reload();
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }
}
