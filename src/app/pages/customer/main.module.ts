import { CustomerService } from './customer.service';
import { CustomerComponent } from './customer.component';
import { MainComponent } from './main.component';
import { enableDebugTools } from '@angular/platform-browser';
import { routing } from './main.routing';
import { ModalModule } from 'ng2-bootstrap';
import { NgaModule } from './../../theme/nga.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PartnerComponent } from './partner/partner.component';
import { SalesComponent } from './sales/sales.component';
import { PartnerSalesComponent } from './partner-sales/partner-sales.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        ModalModule.forRoot(),
        routing],
    exports: [],
    declarations: [MainComponent, CustomerComponent,
        PartnerComponent,
        SalesComponent,
    PartnerSalesComponent
],
    providers: [CustomerService],
})
export class MainModule { }