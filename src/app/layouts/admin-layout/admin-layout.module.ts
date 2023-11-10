import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule } from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../customer/tables.component';
import { TypographyComponent } from '../../laundrystore/typography.component';
import { IconsComponent } from '../../staff/icons.component';
import { MapsComponent } from '../../building/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { TableModule } from 'primeng/table';
import { MatTableModule } from '@angular/material/table';
import { StoreDetailComponent } from '../../laundrystore/store-detail/store-detail.component';
import { OrderComponent } from '../../order/order.component';
import { OrderhistoryComponent } from '../../orderhistory/orderhistory.component';
import { PaymentComponent } from '../../payment/payment.component';
import { StafftripComponent } from '../../stafftrip/stafftrip.component';
import { BuildingDetailComponent } from "../../building/building-detail/building-detail.component";
import { CustomerDetailComponent } from "../../customer/customer-detail/customer-detail.component";
import { AddCustomerComponent } from "../../customer/add-customer/add-customer.component";
import { AddOrderComponent } from "../../order/add-order/add-order.component";
import { StaffDetailComponent } from "../../staff/staff-detail/staff-detail.component";
import { AddStaffComponent } from "../../staff/add-staff/add-staff.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { AddNewBuildingComponent } from "../../building/add-new-building/add-new-building.component";
import { AddNewStoreComponent } from "../../laundrystore/add-new-store/add-new-store.component";
import { UpdateStoreComponent } from "../../laundrystore/update-store/update-store.component";
import { OrderhistoryDetailComponent } from "../../orderhistory/orderhistory-detail/orderhistory-detail.component";
import { OrderDetailComponent } from "../../order/order-detail/order-detail.component";
import { UpdateBuildingComponent } from "../../building/update-building/update-building.component";
import { UsermanagementComponent } from "../../usermanagement/usermanagement.component";
// import {ViewStoreComponent} from "../../laundrystore/view-store/view-store.component";
import { TimeConversionPipe } from 'app/pages/time-conversion.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    TableModule,
    MatTableModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' }),
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,

  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    PaymentComponent,
    StafftripComponent,

    OrderhistoryDetailComponent,
    OrderhistoryComponent,
    TimeConversionPipe,

    CustomerDetailComponent,
    AddCustomerComponent,

    StaffDetailComponent,
    AddStaffComponent,

    MapsComponent,
    BuildingDetailComponent,
    AddNewBuildingComponent,
    UpdateBuildingComponent,


    TypographyComponent,
    AddNewStoreComponent,
    StoreDetailComponent,
    UpdateStoreComponent,
    // ViewStoreComponent,

    OrderDetailComponent,
    AddOrderComponent,
    OrderComponent,
    OrderComponent,

    UsermanagementComponent,

  ]
})

export class AdminLayoutModule { }
