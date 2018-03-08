import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent, HeaderComponent } from "app/shared";
import { ClassesRoutingModule } from "app/layout/class/classes/classes-routing.module";
import { ClassesComponent } from "app/layout/class/classes/classes.component";
import { DataTableModule } from "angular2-datatable";
import { DataFilterPipe } from "app/layout/class/classes/data-filter.pipe";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
//import { OrderrByPipe } from "app/layout/class/classes/orderby.pipe";

@NgModule({
    imports: [
        CommonModule,
        ClassesRoutingModule,
        DataTableModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        ClassesComponent,DataFilterPipe
    ]
})
export class ClassesModule { }
