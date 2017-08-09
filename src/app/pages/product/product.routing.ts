import { StealEditComponent } from './components/steal/steal.edit.component';
import { StealComponent } from './components/steal/steal.component';
import { SelectionEditComponent } from './components/selection/selection.edit.component';
import { ProductComponent } from './product.component';
import { SelectionComponent } from './components/selection/selection.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: 'selection', component: SelectionComponent },
      { path: 'selection/:id', component: SelectionEditComponent },
      { path: 'steal', component: StealComponent },
       { path: 'steal/:id', component: StealEditComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);