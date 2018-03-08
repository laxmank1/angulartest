import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule, //required for ngForm
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
