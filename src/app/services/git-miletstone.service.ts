import { Injectable } from '@angular/core';
import { GithubIssues } from '../modules/github-milestone';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const githubAPI = 'https://api.github.com/';

@Injectable()
export class GitIssuesService {

  constructor(public http: HttpClient) { }

  getIssues(username: string, reponame: string): Observable<GithubIssues> {
    const issuesAPI = githubAPI + 'repos/';
    console.log(issuesAPI + username + '/' + reponame + '/' + 'milestones');
    console.log(this.http.get<GithubIssues>(issuesAPI + username + '/' + reponame + '/' + 'milestones'));
    return this.http.get<GithubIssues>(issuesAPI + username + '/' + reponame + '/' + 'milestones');
  }
}
