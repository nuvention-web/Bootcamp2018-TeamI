import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GitIdInfoService } from '../services/git-id-info.service';
import { GitIssuesService } from '../services/git-miletstone.service';
import { GithubId } from './modules/github-id';
import { GithubMilestone } from './modules/github-milestone';
import { GithubIssue } from './modules/github-issue';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

// import { log } from 'util';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  title = 'My Favorite Github Users and Orgs';
  ghId = '';
  repoName = '';
  errorMessage = null;
  private getMilestoneSub: Subscription;
  ghMilestone: GithubMilestone;
  ghIssues: GithubIssue[] = [];
  //
  ghIds: GithubId[] = [];
  private getGitSub: Subscription;
  private getIssuesSub: Subscription;

  constructor(public ids: GitIdInfoService,
              public issues: GitIssuesService,
              public authservice: AuthService,
              public router: Router) {}

  addGhId(toadd: string) {
    this.errorMessage = null;
    this.getGitSub = this.ids.GetGitIdInfo(toadd).subscribe(info => {
        this.ghIds.push(info);
        console.log(info);
      },
      error => {
        console.log('error');
        this.errorMessage = error.message;
      });
    this.ghId = '';
  }

  getMilestone(username: string, reponame: string) {
    this.errorMessage = null;
    this.getMilestoneSub = this.issues.getMilestones(username, reponame).subscribe(milestone => {
        // msArr.forEach( function(ms) {
        //   console.log(ms);
        // })
        // for (const ms in milestone) {
        //   this.ghIssues.push(ms);
        // }
        // this.ghIssues.push(milestone);
        this.ghMilestone = milestone;

        // TODO:
        // currently iterating through all issues for all milestones
        // needs filtering later on
        for (const issue in milestone) {
          this.getIssues(username, reponame, milestone[issue].number);
        }

      },
      error => {
        console.log('milestone error');
        this.errorMessage = error.message;
      });
    this.repoName = '';
    this.ghId = '';
  }

  getIssues(username: string, reponame: string, milestoneNum: number) {
    this.errorMessage = null;
    this.getIssuesSub = this.issues.getIssues(username, reponame, milestoneNum).subscribe(issue => {
        this.ghIssues.push(issue);
        // console.log(this.ghIssues);
      },
      error => {
        console.log('issue error');
        this.errorMessage = error.message;
      });
    return this.ghIssues;
  }

  logout() {
    this.authservice.signOut();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    // this.getGitSub.unsubscribe();
    // this.getMilestoneSub.unsubscribe();
    // this.getIssuesSub.unsubscribe();
  }
}
