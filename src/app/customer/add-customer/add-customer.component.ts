import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BuildingDataService} from "../../service/building-data.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerDataService} from "../../service/customer-data.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;


  constructor(
      private  _fb: FormBuilder,
      private _customerService: CustomerDataService,
      private _dialogRef: MatDialogRef<AddCustomerComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.customerForm = this._fb.group({
      buildingId: '',
      applicationUserId: '',
    })
  }

  ngOnInit(): void {
  }
  onFormSubmit(){
    if(this.customerForm.valid){
      this._customerService.addCustomer(this.customerForm.value).subscribe({
        next: (val: any) => {
          alert('Thêm thành công');
          this._dialogRef.close(true);
          location.reload();
        },
        error:(err: any) => {
          console.error(err);
        }
      })
    }
  }
}
