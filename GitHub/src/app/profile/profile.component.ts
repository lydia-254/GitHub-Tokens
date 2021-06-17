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
  profile:any;
  repoData: any=[]
  submitUsername(){
    // this.hubService.getProfileData(this.userName)
    // this.hubService.getProfileData(this.userName).subscribe((profile: any) =>{
      this.http.get<any>("https://api.github.com/users/"+this.userName).subscribe((profile: any)=>{
      this.profile=profile;
    });
    this.http.get<any>("https://api.github.com/users/"+this.userName+"/repos").subscribe((repos: any)=>{
      this.repoData=repos;
      console.log(this.repoData)
      console.log(repos)
    }); 
  }
  
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
