import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/authentication.service';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isRegisterMode = true;

  error: string = null;

  user = {
    email: '',
    password: ''
  }


  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }
  onSwitchMode() {
    this.isRegisterMode = !this.isRegisterMode;
    console.log(this.isRegisterMode);

  }
  /*registerWithEmail(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

  }*/

  //   onSubmit(form: NgForm) {
  //     if (!form.valid) {
  //       return;
  //     }
  //     const email = form.value.email;
  //     const password = form.value.password;
  //     let authObs: Observable<AuthResponseData>;

  //     authObs = this.authService.signup(email, password);

  //     authObs.subscribe(
  //       resData => {
  //         console.log(resData);

  //       },
  //       errorMessage => {
  //         console.log(errorMessage);
  //         this.error = errorMessage;
  //       }
  //     );

  //     form.reset();
  //   }

}
