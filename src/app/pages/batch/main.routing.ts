import { BatchEditComponent } from './components/batch.edit.component';
import { BatchComponent } from './components/batch.component';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'batch', component: BatchComponent },
      { path: 'batch/:id', component: BatchEditComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);