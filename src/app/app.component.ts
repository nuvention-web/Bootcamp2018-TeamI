import { Component, OnDestroy } from '@angular/core';
import { GithubId } from './github-id';
import { GitIdInfoService } from './git-id-info.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'My Favorite Github Users and Orgs';
  ghId = '';
  ghIds: GithubId[] = [];
  errorMessage = null;
  private getGitSub: Subscription;

  constructor(public ids: GitIdInfoService) {}

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

  ngOnDestroy() {
    this.getGitSub.unsubscribe();
  }
}
