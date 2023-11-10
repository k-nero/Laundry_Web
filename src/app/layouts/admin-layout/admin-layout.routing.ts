import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../customer/tables.component';
import { TypographyComponent } from '../../laundrystore/typography.component';
import { IconsComponent } from '../../staff/icons.component';
import { MapsComponent } from '../../building/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { OrderComponent } from '../../order/order.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { OrderhistoryComponent } from '../../orderhistory/orderhistory.component';
import { PaymentComponent } from '../../payment/payment.component';
import { StafftripComponent } from '../../stafftrip/stafftrip.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { StoreDetailComponent } from 'app/laundrystore/store-detail/store-detail.component';
import { AuthGuardService } from 'app/service/auth-guard.service';
import { UpdateStoreComponent } from "../../laundrystore/update-store/update-store.component";

import path = require('path');

import { BuildingDetailComponent } from "../../building/building-detail/building-detail.component";
import { CustomerDetailComponent } from "../../customer/customer-detail/customer-detail.component";
import { OrderDetailComponent } from "../../order/order-detail/order-detail.component";
import { UpdateBuildingComponent } from "../../building/update-building/update-building.component";
import { UsermanagementComponent } from "../../usermanagement/usermanagement.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'user', component: UserComponent },
    { path: 'customer', component: TablesComponent },
    { path: 'customer/:id', component: CustomerDetailComponent },
    {
        path: 'laundrystore', component: TypographyComponent,
        pathMatch: 'full',
        // children: [{
        //     path: '/:id',
        //     component: StoreDetailComponent,
        // }]
    },
    { path: 'laundrystore/:id', component: StoreDetailComponent },
    { path: 'laundrystore/update/:id', component: UpdateStoreComponent },
    { path: 'staff', component: IconsComponent },

    { path: 'building', component: MapsComponent },
    { path: 'building/:id', component: BuildingDetailComponent },
    { path: 'building/update/:id', component: UpdateBuildingComponent },

    { path: 'notifications', component: NotificationsComponent },
    { path: 'order', component: OrderComponent },
    { path: 'order/:id', component: OrderDetailComponent },

    { path: 'upgrade', component: UpgradeComponent },
    { path: 'orderhistory', component: OrderhistoryComponent },
    { path: 'stafftrip', component: StafftripComponent },
    { path: 'payment', component: PaymentComponent },

    { path: 'userManagement', component: UsermanagementComponent },

];
