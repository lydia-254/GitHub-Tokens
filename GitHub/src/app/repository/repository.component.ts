import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HubService } from '../services/hub.service';


@Component({
    selector: 'app-repository',
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.css']
  })
  export class RepositoryComponent implements OnInit {
    
    
  @Output() goback = new EventEmitter<boolean>()
  hideRepo!: boolean;
  repos: any = []
  totalcount!: number


  reposearch:string = ''
  
  githubsearchService: HubService;

  constructor(githubsearchService:HubService) { 
    this.githubsearchService = githubsearchService
  }

  ngOnInit(): void {
    this.repos = this.githubsearchService.searchreps
    this.totalcount = this.githubsearchService.totalCount
    console.log(this.totalcount)
  }

  toback(){
    this.hideRepo = true
    this.goback.emit(this.hideRepo)
  }

  searchrepo(){
    this.githubsearchService.getRepos(this.reposearch)
    console.log(this.reposearch)
  }
  maxvalue(){
    let fun = Number.MIN_VALUE;
    let arr = this.repos

    for (let i=0; i<arr.length;i++){
      console.log(arr[i].forks)
      if(arr[i].forks>fun){
        fun = arr[i].forks
      }
    }
    console.log(fun)
    return fun;
  }

}

