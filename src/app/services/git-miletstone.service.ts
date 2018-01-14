import { Injectable } from '@angular/core';
import { GithubMilestone } from '../modules/github-milestone';
import { GithubIssue } from '../modules/github-issue';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const githubAPI = 'https://api.github.com/';

@Injectable()
export class GitIssuesService {

  constructor(public http: HttpClient) { }

  getMilestones(username: string, reponame: string): Observable<GithubMilestone> {
    const milestoneAPI = githubAPI + 'repos/';
    console.log(milestoneAPI + username + '/' + reponame + '/' + 'milestones');
    console.log(this.http.get<GithubMilestone>(milestoneAPI + username + '/' + reponame + '/' + 'milestones'));
    return this.http.get<GithubMilestone>(milestoneAPI + username + '/' + reponame + '/' + 'milestones');
  }

  getIssues(username: string, reponame: string, milestoneNum: number): Observable<GithubIssue> {
    const issuesAPI = githubAPI + 'repos/';
    console.log(issuesAPI + username + '/' + reponame + '/' + 'issues?milestone=' + milestoneNum);
    return this.http.get<GithubIssue>(issuesAPI + username + '/' + reponame + '/' + 'issues?milestone=' + milestoneNum);
  }
}
