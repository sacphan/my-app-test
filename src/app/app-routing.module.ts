import { Component, NgModule } from '@angular/core';
import {  RouterModule,Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './heros/hero-detail/hero-detail.component';

const routes:Routes = [
  { path: "heroes", component: HerosComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'', redirectTo:'/dashboard', pathMatch:'full'},
  { path:'hero-detail/:id', component:HeroDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
