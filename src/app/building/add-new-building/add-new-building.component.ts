import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BuildingDataService} from "../../service/building-data.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-new-building',
  templateUrl: './add-new-building.component.html',
  styleUrls: ['./add-new-building.component.scss']
})
export class AddNewBuildingComponent implements OnInit {
  buildingForm: FormGroup;
  /*buildingForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })*/

  constructor(
      private  _fb: FormBuilder,
      // private _fc: FormControl,
      private _buildingService: BuildingDataService,
      private _dialogRef: MatDialogRef<AddNewBuildingComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,


  ) {
    this.buildingForm = this._fb.group({
      name: '',
      address: '',
      description: '',
    });
  }

  ngOnInit(): void {
  }
  onFormSubmit(){
    if(this.buildingForm.valid){
      this._buildingService.addNewBuilding(this.buildingForm.value).subscribe({
        next: (val: any) => {
          alert('Thêm tòa nhà thành công');
          this._dialogRef.close(true);
          location.reload();
          // this.ngOnInit();

        },

        error:(err: any) => {
          console.error(err);
        }
      })
    }
  }
}
