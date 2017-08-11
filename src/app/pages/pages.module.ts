import { CommonInterceptor } from './../interceptor/common.interceptor';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';
import { provideInterceptorService } from 'ng2-interceptors';
import { SlimLoadingBarModule, SlimLoadingBarService } from 'ng2-slim-loading-bar';
@NgModule({
  imports: [CommonModule, NgaModule, routing,SlimLoadingBarModule.forRoot()],
  declarations: [Pages],
  providers:[provideInterceptorService([
    new CommonInterceptor(new SlimLoadingBarService())
  ])]
})
export class PagesModule {
}
