import { PartnerSalesComponent } from './partner-sales/partner-sales.component';
import { PartnerComponent } from './partner/partner.component';
import { SalesComponent } from './sales/sales.component';
import { CustomerComponent } from './customer.component';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'customer', component: CustomerComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'partner', component: PartnerComponent },
      { path: 'partnersales', component: PartnerSalesComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);