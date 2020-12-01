import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
@Component({
  selector: 'app-sig-in',
  templateUrl: './sig-in.page.html',
  styleUrls: ['./sig-in.page.scss'],
})
export class SigInPage implements OnInit {
  email:string = "";
  password:string = "";
  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }
async login(){
  const {email, password} = this
  try{
    const res = await this.afAuth.signInWithEmailAndPassword(email, password);
    if(res){
        this.router.navigateByUrl('tabs/home');
    }
  }catch(error){
    console.dir(error());
    if(error.code === "user-not-found"){
      console.log("User not found");
    }
    
  }
}
}
