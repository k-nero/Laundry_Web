import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'admin/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
  { path: 'admin/userManagement', title: 'User Management', icon: 'pe-7s-user', class: '' },
  { path: 'admin/order', title: 'Orders', icon: 'pe-7s-map-marker', class: '' },
  { path: 'admin/orderhistory', title: 'Orders History', icon: 'pe-7s-science', class: '' },
  { path: 'admin/customer', title: 'Customers', icon: 'pe-7s-note2', class: '' },
  { path: 'admin/laundrystore', title: 'Laundry Stores', icon: 'pe-7s-news-paper', class: '' },
  { path: 'admin/building', title: 'Buildings', icon: 'pe-7s-map-marker', class: '' },
  { path: 'admin/staff', title: 'Staffs', icon: 'pe-7s-science', class: '' },
  { path: 'admin/stafftrip', title: 'Staff Trip', icon: 'pe-7s-science', class: '' },
  { path: 'admin/payment', title: 'Payment', icon: 'pe-7s-science', class: '' },
  { path: 'admin/notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '' },
  { path: 'admin/upgrade', title: 'Upgrade to PRO', icon: 'pe-7s-rocket', class: 'active-pro' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
