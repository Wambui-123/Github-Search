import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;

  getUser = (username: string) => {
      return this.http.get(`${this.baseUrl}/${username}`)
  }
  getRepos = (username: string) => {
    return this.http.get(`${this.baseUrl}/${username}/repos`)
  }
}
