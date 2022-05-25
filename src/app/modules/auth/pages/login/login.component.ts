import { Component, OnInit } from '@angular/core';
import { User } from '@models/user';
import { AuthService } from 'src/app/core/authentication/auth.service';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/core/http/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: User = new User();
  private suscription: Subscription = new Subscription();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  getCustomToken() {
    this.suscription.add(
      this.auth.getCustomToken(this.user).subscribe({
        next: (response: any) => {
          let tokenId = response.Token;
          this.loginWithCustomJWT(tokenId);
        },
        error: (err) => {
          Swal.fire('Ups!', err.error.message, 'error');
          console.error(err);
        },
        complete: () => {},
      })
    );
  }

  loginWithCustomJWT(token: string) {
    this.auth
      .loginWithCustomJWT(token)
      .then((res) => {
        this.getCurrentUserFirebase();
      })
      .catch((error) => {
        Swal.fire('Ups!', 'El usuario no existe en la base de datos', 'error');
        console.error(error);
      });
  }

  getCurrentUserFirebase() {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      user
        .getIdToken(true)
        .then((idToken) => {
          Swal.fire('Ok!', 'Bienvenido', 'success');
          this.auth.saveToken(idToken);
          console.log(idToken);
          this.router.navigateByUrl('/home/carriers');
        })
        .catch(function (error) {
          console.error('getTokenError: ' + error);
        });
    }
  }

  loginWithEmailAndPassword() {
    this.auth
      .loginWithEmailAndPassword(this.user)
      .then((res) => {
        this.getCurrentUserFirebase();
      })
      .catch((error) => {
        Swal.fire('Ups!', 'El usuario no existe en la base de datos', 'error');
        console.error(error);
      });
  }

  loginWithGoogle() {
    this.auth
      .loginWithGoogle(this.user)
      .then((res) => {
        this.getCurrentUserFirebase();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  loginWithGithub() {
    this.auth
      .loginWithGithub(this.user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  loginWithFacebook() {
    this.auth
      .loginWithFacebook(this.user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
