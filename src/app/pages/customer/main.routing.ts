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
      { path: '', component: CustomerComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);