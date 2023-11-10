import { Component, OnInit } from '@angular/core';
import { LaundrystoreDataService } from 'app/service/laundrystore-data.service';
import {MatDialog} from "@angular/material/dialog";
import {AddNewStoreComponent} from "./add-new-store/add-new-store.component";


@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  laundryStoreData: any;
  selectedLaundryStore: any;

  constructor(
      private laundryStore: LaundrystoreDataService,
      private _dialog: MatDialog,
      ) { }

  ngOnInit(): void {
    this.laundryStore.getLaundryStore().subscribe((data) => {
      this.laundryStoreData = data
      console.log(data)
    });
  }
  viewDetail(laundryStoreId: string): void {
    this.laundryStore.getLaundryStoreById(laundryStoreId).subscribe((data) => {
      this.selectedLaundryStore = data
      console.log(data)
    });
    window.location.href = "/admin/laundrystore/" + laundryStoreId;
  }

  addRow(): void {
    // Implement your logic to add a new row
    console.log('Add button clicked');
  }

  updateRow(row: any): void {
    // Implement your update logic here
    console.log('Update row:', row);
  }

  deleteStore(id: string): void {
    this.laundryStore.deleteStore(id).subscribe({
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

  openAddStoreForm(){
    this._dialog.open(AddNewStoreComponent);
  }
    protected readonly open = open;

}
