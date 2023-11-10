import {Component, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup} from "@angular/forms";
import {LaundrystoreDataService} from "../../service/laundrystore-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.scss']
})
export class UpdateStoreComponent implements OnInit {
  selectLaundry: any;

  updateStoreForm = new FormGroup({
    applicationUserID: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl(''),
    status: new FormControl('true'),
  })

  constructor(
      private route: ActivatedRoute,
      private _laundryStoreService: LaundrystoreDataService,
  ) {

  }

  ngOnInit(): void {
    this.getLaundryStoreById();
  }


  getLaundryStoreById() {
    const laundryId = this.route.snapshot.paramMap.get('id');
    this._laundryStoreService.getLaundryStoreById(laundryId).subscribe((laundry) => {
      this.selectLaundry = laundry;
      console.log(laundry);
    })
  }

  updateLaundryStoreById(){
    const laundryId = this.route.snapshot.paramMap.get('id');
    if(this.updateStoreForm.valid){
      this._laundryStoreService.updateStore(laundryId, this.updateStoreForm.value).subscribe({
        next: (val: any) => {
          alert('Sửa thành công');
          location.reload();
        },
        error:(err: any) => {
          console.error(err);
        }
      })
    }
  }
}
