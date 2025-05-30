import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { ToastComponent } from '../shared/components/toast/toast.component';
import { NewPasswordPageComponent } from './password/pages/new-password-page/new-password-page.component';
import { ForgotPasswordPageComponent } from './password/pages/forgot-password-page/forgot-password-page.component';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './password/components/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './password/components/new-password/new-password.component';

@NgModule({
 declarations: [
    LoginComponent,
    LoginPageComponent,
    NewPasswordPageComponent,
    ForgotPasswordPageComponent,
    ForgotPasswordComponent, // <--- Declare the component here
    NewPasswordComponent     
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
