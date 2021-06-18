import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../repository';


@Injectable({
  providedIn: 'root'
})
export class HubService {

  searchrepo: Repository;
  repoData: any = []
  singleRepoData: any = []
  searchreps:any = []
  totalCount: number = 0


  constructor(private http: HttpClient) {
    this.searchrepo = new Repository('', '', '', new Date(), new Date(), '', 0, '');
  }

  // RECEIVING THE DATA
  

  getRepos(query: string) {
    interface ApiResponse {
      total_count: number,
    }
    this.repoData.splice(0, this.repoData.length) // deleting an array
    let promise = new Promise((resolve, reject) => {
      this.http.get<any>('https://api.github.com/search/repositories?q=' + query).toPromise().then(response => {
        this.totalCount = response.total_count

        for (var i = 0; i < response.items.length; i++) {
          console.log(response.items[i].full_name)
          this.singleRepoData = new Repository(response.items[i].full_name, response.items[i].html_url, response.items[i].description, new Date(response.items[i].updated_at), new Date(response.items[i].created_at), response.items[i].language, response.items[i].forks_count,  response.items[i].name )
          this.searchreps.push(this.singleRepoData)
        }
        resolve('Success')
      }), (error: any) => {
        reject(error)
      }

      this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + query).toPromise().then(response => {
        this.totalCount = response.total_count
        console.log(this.totalCount)
        resolve('Success')
      }), (error: any) => {
        reject(error)
      }
    })
    return promise;
  }
}
