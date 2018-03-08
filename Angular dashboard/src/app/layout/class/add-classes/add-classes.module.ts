import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent, HeaderComponent } from "app/shared";
import { AddClassesRoutingModule } from "app/layout/class/add-classes/add-classes-routing.module";
import { AddClassesComponent } from "app/layout/class/add-classes/add-classes.component";


@NgModule({
    imports: [
        CommonModule,
        AddClassesRoutingModule
    ],
    declarations: [
        AddClassesComponent
    ]
})
export class AddClassesModule { }
