import { HenneryService } from './components/hennery/hennery.service';
import { HenneryEditComponent } from './components/hennery/hennery.edit.component';
import { HenneryComponent } from './components/hennery/hennery.component';
import { MainComponent } from './main.component';
import { enableDebugTools } from '@angular/platform-browser';
import { routing } from './main.routing';
import { ModalModule } from 'ng2-bootstrap';
import { NgaModule } from './../../theme/nga.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        ModalModule.forRoot(),
        routing],
    exports: [],
    declarations: [MainComponent,HenneryComponent,HenneryEditComponent],
    providers: [HenneryService],
})
export class MainModule { }