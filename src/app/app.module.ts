import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { OrderComponent } from './pages/order/order.component';

import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from "@angular/material/core";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { ViewStoreComponent } from './laundrystore/view-store/view-store.component';
import { UserBuildingComponent } from './pages/user-building/user-building.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { PaymentService } from './service/payment.service';
import { OrderDirectlyComponent } from './pages/order-directly/order-directly.component';
import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { ViewOrderUserComponent } from './pages/view-order-user/view-order-user.component';
import { MatListModule } from '@angular/material/list';






@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    PaymentComponent,
    OrderComponent,
    AboutComponent,
    ProfileComponent,

    ViewStoreComponent,
    UserBuildingComponent,
    PaymentSuccessComponent,
    OrderDirectlyComponent,
    PaymentMethodComponent,
    ViewOrderUserComponent,


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, AuthGuardService, PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
