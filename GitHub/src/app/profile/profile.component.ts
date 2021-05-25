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
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username!: string;
  profileService!: ProfileService;

  submitUsername(){
    this.profileService.getUserData(this.username)
  }

  profile:any;
  constructor(profileService:ProfileService) {
    this.profileService = profileService
    this.profileService.getProfileData().subscribe((profile: any) =>{
      console.log(profile);
      this.profile=profile;

    });
   }

  ngOnInit(){
  }

}
