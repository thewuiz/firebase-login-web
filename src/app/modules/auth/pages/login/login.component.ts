import { Component, OnInit } from '@angular/core';
import { User } from '@models/user';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: User = new User();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.auth
      .login(this.user)
      .then((res) => {
        console.log('res');
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loginWithGoogle() {
    this.auth
      .loginWithGoogle(this.user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loginWithGithub() {
    this.auth
      .loginWithGithub(this.user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loginWithFacebook() {
    this.auth
      .loginWithFacebook(this.user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
