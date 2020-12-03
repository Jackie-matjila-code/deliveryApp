import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
//import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { }


}
