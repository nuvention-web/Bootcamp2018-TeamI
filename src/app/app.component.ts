import { Component, OnDestroy } from '@angular/core';
import { GithubId } from './modules/github-id';
import { GithubIssues } from './modules/github-milestone';
import { GitIssuesService } from './services/git-miletstone.service';
import { GitIdInfoService } from './services/git-id-info.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'My Favorite Github Users and Orgs';
  ghId = '';
  repoName = '';
  errorMessage = null;
  private getMilestoneSub: Subscription;
  ghIssues: GithubIssues[] = [];
  //
  ghIds: GithubId[] = [];
  private getGitSub: Subscription;


  constructor(public ids: GitIdInfoService, public issues: GitIssuesService) {}

  addGhId(toadd: string) {
    this.errorMessage = null;
    this.getGitSub = this.ids.GetGitIdInfo(toadd).subscribe(info => {
      this.ghIds.push(info);
    },
    error => {
      console.log('error');
      this.errorMessage = error.message;
    });
    this.ghId = '';
  }

  getMilestone(username: string, reponame: string) {
    this.errorMessage = null;
    this.getMilestoneSub = this.issues.getIssues(username, reponame).subscribe(milestone => {
      console.log(milestone[0]);
      this.ghIssues.push(milestone);
    },
      error => {
      console.log('milestone error');
      this.errorMessage = error.message;
    });
    this.repoName = '';
    this.ghId = '';
  }

  ngOnDestroy() {
    this.getGitSub.unsubscribe();
    this.getMilestoneSub.unsubscribe();
  }
}
