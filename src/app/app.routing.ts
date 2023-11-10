import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { OrderComponent } from './pages/order/order.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserBuildingComponent } from './pages/user-building/user-building.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { OrderDirectlyComponent } from './pages/order-directly/order-directly.component';
import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { ViewOrderUserComponent } from './pages/view-order-user/view-order-user.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // }, 

  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },

  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'user-building',
    component: UserBuildingComponent,
  },
  {
    path: 'success',
    component: PaymentSuccessComponent,
  },
  {
    path: 'directly',
    component: OrderDirectlyComponent
  },
  {
    path: 'method',
    component: PaymentMethodComponent
  },
  {
    path: 'view-order/:id',
    component: ViewOrderUserComponent
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
      }]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
