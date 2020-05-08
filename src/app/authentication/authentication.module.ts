import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerModule } from 'ngx-spinner';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    Error404Component,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule
  ],
  exports: [
    Error404Component,
    LoginComponent
  ]
})
export class AuthenticationModule { }
