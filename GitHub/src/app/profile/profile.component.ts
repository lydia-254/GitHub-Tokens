// import { Component, OnInit } from '@angular/core';
// import { profileService} from './Profile.Service';
// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   username!: string;
//   profileService!: ProfileService;


//   profile:any;
//   constructor(profileService:ProfileService) {
//     this.profileService = profileService
//     this.profileService.getProfileData().subscribe(profile =>{
//       console.log(profile);
//       this.profile=profile;

//     });
//    }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { HubService } from '../services/hub.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName!: string;
  hubService: HubService;

  submitUsername(){
    // this.hubService.getProfileData(this.userName)
    // this.hubService.getProfileData(this.userName).subscribe((profile: any) =>{
      this.http.get<any>("https://api.github.com/users/"+this.userName).subscribe((profile: any)=>{
      console.log(profile);
      this.profile=profile;

    });
  }
  
  profile:any;
  constructor(hubService: HubService, private http: HttpClient) {
    this.hubService = hubService
    // this.hubService.getProfileData(this.userName).subscribe((profile: any) =>{
    //   console.log(profile);
    //   this.profile=profile;

    // });
   }

  ngOnInit(){
  }

}
