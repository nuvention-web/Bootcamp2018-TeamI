import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdListComponent } from './dashboard/id-list/id-list.component';
import { GitIdInfoService } from './services/git-id-info.service';
import { GitIssuesService } from './services/git-miletstone.service';
import { HttpClientModule } from '@angular/common/http';
import { IssuesListComponent } from './dashboard/milestone-list/milestone-list.component';
import { IssueListComponent } from './dashboard/issue-list/issue-list.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routes } from './routes';
import { AuthService } from './core/auth.service';
import { LoginComponent } from './dashboard/login/login/login.component';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './core/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    IdListComponent,
    IssuesListComponent,
    IssueListComponent,
    DashboardComponent,
    LoginComponent,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    CoreModule,
    routes,
    HttpModule,
  ],
  providers: [GitIdInfoService, GitIssuesService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
