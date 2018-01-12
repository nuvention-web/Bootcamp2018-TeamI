import {Component, OnInit, Input, Injectable} from '@angular/core';
import { GithubId } from '../github-id';

@Component({
  selector: 'app-id-list',
  templateUrl: './id-list.component.html',
  styleUrls: ['./id-list.component.css']
})

export class IdListComponent implements OnInit {
  @Input() idList: GithubId[];
  constructor() { }

  toggleFavorite(favid: GithubId) {
    favid.favorite = !favid.favorite;
  }

  ngOnInit() {
  }

}
