import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent, HeaderComponent } from "app/shared";
import { LayoutComponent } from "app/layout/layout.component";
import { AddStudentRoutingModule } from "app/layout/student/add-student/add-student-routing.module";
import { AddStudentComponent } from "app/layout/student/add-student/add-student.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        AddStudentRoutingModule,
        NgbModule.forRoot(), //inportant for date
        FormsModule,
        ReactiveFormsModule //inportant for date`
    ],
    declarations: [
        AddStudentComponent
    ]
})
export class AddStudentModule { }
