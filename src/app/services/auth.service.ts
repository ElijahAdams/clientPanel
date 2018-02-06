import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { observable } from 'rxjs/symbol/observable';


@Injectable()
export class AuthService {

  constructor(private afa : AngularFireAuth) { }

  login(email: string, password: string){
    return new Promise((resolve, reject) =>
    {
      this.afa.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err =>
        reject(err));
    });

  }

  getAuth() {
    return this.afa.authState.map(auth => auth);
  }
}
