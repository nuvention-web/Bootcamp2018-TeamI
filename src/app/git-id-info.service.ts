import { Injectable } from '@angular/core';
import { GithubId } from './github-id';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const githubAPI = 'https://api.github.com/';

@Injectable()
export class GitIdInfoService {

  constructor(public http: HttpClient) { }

  GetGitIdInfo(login: string): Observable<GithubId> {
    const userAPI = githubAPI + 'users/';
    console.log(userAPI + login);
    return this.http.get<GithubId>(userAPI + login);
    // return({
    //   name: login,
    //   bio: login + ' biography information',
    //   avatar_url: '../assets/images/User_Avatar.png'
    // });
  }
}
