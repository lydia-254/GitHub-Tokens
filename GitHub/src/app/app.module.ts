// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ProfileComponent } from './profile/profile.component';
// import {HttpClientModule} from '@angular/common/http';
// import { ProfileService } from './Profile.Service';


// @NgModule({
//   declarations: [
//     AppComponent,
//     ProfileComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//   ],
//   providers: [ProfileService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http'
// import { profile } from 'console';
import { HubService } from './hub.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
