import { Component, OnInit, Input } from '@angular/core';
import { GithubMilestone } from '../modules/github-milestone';
import { GithubIssue } from '../modules/github-issue';

@Component({
  selector: 'app-milestone-list',
  templateUrl: './milestone-list.component.html',
  styleUrls: ['./milestone-list.component.css']
})
export class IssuesListComponent implements OnInit {

  @Input() milestoneList: GithubMilestone[];
  // @Input() issueList: GithubIssue[];
  constructor() { }

  ngOnInit() {
  }

}
