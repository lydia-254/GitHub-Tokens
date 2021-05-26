import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HubService {
  // getProfileData() {
  //   throw new Error('Method not implemented.');
  // }
  // getUserData: any;

  constructor() { }
  getProfileData(user: string){
    return "https://api.github.com/users/"+ user;
  }
}

