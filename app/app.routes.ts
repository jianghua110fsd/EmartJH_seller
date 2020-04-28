import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SellerTopComponent } from './seller-top/seller-top.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export class AppRoutingModule { }
export const routingComponents = [
TopBarComponent,
LoginComponent,
SignupComponent
];

