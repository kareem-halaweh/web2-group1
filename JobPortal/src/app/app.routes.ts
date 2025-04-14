import { Component, NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { FindJobPageComponent } from './find-job-page/find-job-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {LoginComponent} from './User Roles & Authentication/login/login.component';
export const routes: Routes = [
  {path:'h' , component : HomePageComponent},
  {path:'find-job' , component : FindJobPageComponent},
  {path: '', component:LoginComponent },

];



