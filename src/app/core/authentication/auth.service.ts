import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  async login(user: User) {
    return await this.afAuth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        return error;
      });
  }

  async register(user: User) {
    return await this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        return error;
      });
  }

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

  //======================= Facebook Login ============================
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

  //======================= Github Login ============================
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
}
