import { Component, OnInit, Input } from '@angular/core';
import { GithubIssue } from '../modules/github-issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  @Input() issueList: GithubIssue[];
  constructor() { }

  ngOnInit() {
  }

}
