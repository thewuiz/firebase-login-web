import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Injectable({
  providedIn: 'root',
})
export class FirebaseMessagingServiceService {
  constructor(private fireMessaging: AngularFireMessaging) {}

  requestToken(): void {
    this.fireMessaging.requestToken.subscribe({
      next: (token) => {
        console.log(token);
      },
      error: (err) => {
        console.error('Fetching FCM token failed: ', +err);
      },
    });
  }
}
