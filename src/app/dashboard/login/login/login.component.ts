import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  error: any;
  authState: any = null;

  constructor(public afAuth: AngularFireAuth,
              public authservice: AuthService,
              private router: Router) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  githubLogin() {
    this.authservice.githubLogin();
  }

  googleLogin() {
    this.authservice.googleLogin();
  }


  ngOnInit() {
    console.log('@login.component ----- ngOnInit');

    $('#pwInput').keyup(function(event) {
      if (event.keyCode === 13) {
        $('#loginBtn').click();
      }
    });
  }

}
