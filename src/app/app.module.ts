import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule} from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from './shared'
import { HerosComponent } from './heros/heros.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './heros/hero-detail/hero-detail.component';
import { CoreModule } from './core/core.module';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    FooterComponent,
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CoreModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
