import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from "app/layout/student/add-student/add-student.component";

const routes: Routes = [
    { path: '', component: AddStudentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStudentRoutingModule { }
