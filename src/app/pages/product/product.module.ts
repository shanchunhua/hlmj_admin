import { StealEditComponent } from './components/steal/steal.edit.component';
import { StealService } from './components/steal/steal.service';
import { StealComponent } from './components/steal/steal.component';
import { SelectionEditComponent } from './components/selection/selection.edit.component';
import { SelectionService } from './components/selection/selection.service';
import { ModalModule } from 'ng2-bootstrap';
import { NgaModule } from './../../theme/nga.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { routing } from './product.routing';
import { SelectionComponent } from './components/selection/selection.component';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        ModalModule.forRoot(),
        routing],
    exports: [],
    declarations: [ProductComponent, SelectionComponent,SelectionEditComponent,StealComponent,StealEditComponent],
    providers: [SelectionService,StealService],
})
export class ProductModule { }
