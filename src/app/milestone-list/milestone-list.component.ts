import { Component, OnInit, Input } from '@angular/core';
import { GithubIssues } from '../modules/github-milestone';

@Component({
  selector: 'app-milestone-list',
  templateUrl: './milestone-list.component.html',
  styleUrls: ['./milestone-list.component.css']
})
export class IssuesListComponent implements OnInit {

  @Input() issueList: GithubIssues[];
  constructor() { }

  ngOnInit() {
  }

}
