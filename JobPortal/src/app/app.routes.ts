import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FindJobPageComponent } from './find-job-page/find-job-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {LoginComponent} from './User Roles & Authentication/login/login.component';
import {ChangePasswordComponent} from './User Roles & Authentication/change-password/change-password.component';
import {ChangePasswordSuccessComponent} from './User Roles & Authentication/change-password/change-password-success/change-password-success.component';
import {ResetPasswordComponent} from './User Roles & Authentication/reset-password/reset-password.component';
import {EnterCodeComponent} from './User Roles & Authentication/reset-password/enter-code/enter-code.component';
import {NewPasswordResetPasswordComponent} from './User Roles & Authentication/reset-password/new-password-reset-password/new-password-reset-password.component';
import {ResetPassswordSuccessComponent} from './User Roles & Authentication/reset-password/reset-passsword-success/reset-passsword-success.component';
export const routes: Routes = [
  {path:'' , component : HomePageComponent},
  {path:'find-job' , component : FindJobPageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'changePassword', component:ChangePasswordComponent },
  {path: 'changePasswordSuccess', component: ChangePasswordSuccessComponent },
  {path: 'resetPassword' ,component:ResetPasswordComponent},
  {path:'enterCode', component:EnterCodeComponent},
  {path:'newPasswordResetPassword',component:NewPasswordResetPasswordComponent},
  {path:'resetPasswordSuccess',component:ResetPassswordSuccessComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})export class AppRoutingModule { }


