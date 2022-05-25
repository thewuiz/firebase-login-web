import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { getAuth, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token: string = '';
  private base_url: String = environment.base_url;

  public get token(): string {
    if (this._token !== '') {
      return this._token;
    } else if (this._token == '' && sessionStorage.getItem('token')) {
      this._token = sessionStorage.getItem('token') || '';
      return this._token;
    }
    return '';
  }

  constructor(private http: HttpClient, private afAuth: AngularFireAuth) {}

  getCustomToken(user: User) {
    return this.http.post(`${this.base_url}/custom/token`, user).pipe(
      map((response) => {
        return response;
      })
    );
  }

  //==================================== FIREBASE METHODS ====================================
  //Login with email and password
  async loginWithEmailAndPassword(user: User) {
    return await this.afAuth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((resp) => {
        return resp.user?.getIdToken(true);
      })
      .catch((error) => {
        return error;
      });
  }

  //Register new user with email and password
  async registerWithEmailAndPassword(user: User) {
    return await this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        return error;
      });
  }

  // Google Login
  async loginWithGoogle(user: User) {
    return await this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        return error;
      });
  }

  // Facebook Login
  async loginWithFacebook(user: User) {
    return await this.afAuth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        return error;
      });
  }

  // Github Login
  async loginWithGithub(user: User) {
    return await this.afAuth
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        return error;
      });
  }

  async loginWithCustomJWT(token: string) {
    return await this.afAuth
      .signInWithCustomToken(token)
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        return error;
      });
  }

  signOut() {
    const auth = getAuth();
    signOut(auth)
      .then((response) => {
        Swal.fire('Good Bye', 'Sesion finalizada', 'success');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //======================= Token =======================
  logout(): void {
    sessionStorage.removeItem('token');
    this._token = '';
    this.isAuthenticated();
    this.signOut();
  }

  getPayload(accessToken: string): any {
    if (accessToken !== '') {
      return JSON.parse(atob(accessToken.split('.')[1]));
    } else return '';
  }

  isAuthenticated(): boolean {
    let payload = this.getPayload(this.token);

    if (payload !== '' && payload.user_id) {
      return true;
    }
    return false;
  }

  saveToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }
}
