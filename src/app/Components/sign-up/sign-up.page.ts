import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
email:string = "";
password:string = "";
cpassword:string = "";

  constructor(public auth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }
  async register(){
    const {email, password, cpassword} = this
    if(password !== cpassword){
      return console.error("Passwords do not match");
    }try{
      const res = await this.auth.createUserWithEmailAndPassword(email, password);
      console.log(res);
      console.log("User created");
      if(res){
        this.router.navigateByUrl('sig-in');
    }
      
    }catch(error){
      console.dir(error);
      if(error.code === "auth/email-already-in-use"){
         this.router.navigateByUrl('sig-in');
      }
    }
    
  }
}
