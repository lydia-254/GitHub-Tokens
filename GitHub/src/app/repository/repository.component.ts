import { Component, OnInit } from '@angular/core';
import { HubService } from '../services/hub.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  repoLink!: string;
  hubService: HubService | undefined;
  repository:any;
  repoData: any=[]
  submitRepoLink(){
    
    this.http.get<any>("https://api.github.com/repos/"+this.repoLink+"/repos").subscribe((repos: any)=>{
      this.repoData=repos;
      console.log(this.repoData)
      console.log(repos)
    }); 
  }

  constructor(hubService: HubService, private http: HttpClient) {
    this.hubService = hubService

  this.ngOnInit();
  }

}
