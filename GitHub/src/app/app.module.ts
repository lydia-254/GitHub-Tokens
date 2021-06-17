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
import {HttpClientModule} from '@angular/common/http';
// import { ServiceHub} from './Service.Hub';
import { HubService } from './services/hub.service';
import { FormsModule } from '@angular/forms';
import { RepositoryComponent } from './repository/repository.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepositoryComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [HubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
