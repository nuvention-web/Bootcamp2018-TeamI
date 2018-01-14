import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IdListComponent } from './id-list/id-list.component';
import { GitIdInfoService } from './services/git-id-info.service';
import { GitIssuesService } from './services/git-miletstone.service';
import { HttpClientModule } from '@angular/common/http';
import { IssuesListComponent } from './milestone-list/milestone-list.component';
import { IssueListComponent } from './issue-list/issue-list.component';


@NgModule({
  declarations: [
    AppComponent,
    IdListComponent,
    IssuesListComponent,
    IssueListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [GitIdInfoService, GitIssuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
