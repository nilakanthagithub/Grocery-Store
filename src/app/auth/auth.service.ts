import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
// import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:  User;

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async  signUp(email:  string, password:  string) {
    try {
        await  this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        localStorage.setItem('signup', JSON.stringify("Sign Up Successfull!"));
        this.authLogout();
        // this.router.navigate(['login']);
    } catch (e) {
        // alert("Error!"  +  e.message);
        localStorage.setItem('signup', JSON.stringify(e.message));
    }
  }

  async  login(email:  string, password:  string) {
    try {
        await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
        localStorage.setItem('login', JSON.stringify("Sign In Successfull!"));
        // this.router.navigate(['home']);
    } catch (e) {
        localStorage.setItem('login', JSON.stringify(e.message));
    }
  }

  async logout(){
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  async authLogout(){
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }

  getError(key){
    const log = JSON.parse(localStorage.getItem(key));
    return log;
  }
}
