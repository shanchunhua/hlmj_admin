import { HenneryEditComponent } from './components/hennery/hennery.edit.component';
import { HenneryComponent } from './components/hennery/hennery.component';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'hennery', component: HenneryComponent },
      { path: 'hennery/:id', component: HenneryEditComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);