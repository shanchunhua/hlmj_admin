import { BatchService } from './components/batch.service';
import { BatchEditComponent } from './components/batch.edit.component';
import { BatchComponent } from './components/batch.component';
import { MainComponent } from './main.component';
import { enableDebugTools } from '@angular/platform-browser';
import { routing } from './main.routing';
import { ModalModule } from 'ng2-bootstrap';
import { NgaModule } from './../../theme/nga.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        ModalModule.forRoot(),
        MomentModule,
        routing],
    exports: [],
    declarations: [MainComponent,BatchComponent,BatchEditComponent],
    providers: [BatchService],
})
export class MainModule { }