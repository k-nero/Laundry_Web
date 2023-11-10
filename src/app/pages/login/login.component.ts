import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/authentication.service';
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


// export interface LoginData {
//   username: string;
//   password: string;
// }




export class LoginComponent implements OnInit {
  isLoginMode = true;

  error: string = null;
  provider: any;
  facebook: any;

  user = {
    email: '',
    password: ''
  }


  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }



  // constructor(private authService: AuthService, private http: HttpClient) { }
  ngOnInit(): void {
    this.provider = new GoogleAuthProvider();
    this.facebook = new FacebookAuthProvider();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    console.log(this.isLoginMode);

  }





  loginWithGoogle() {
    const auth = getAuth();
    signInWithPopup(auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        console.log(user.getIdToken);
        const token = { 'accessToken': user['accessToken'] };
        console.log(token);

        // this.http.post('https://13.212.24.193/api/v1/authenticate', token).subscribe({
        //   next: (data) => {
        //     console.log(data);
        //   }
        // });

        fetch("https://13.212.24.193/api/v1/authenticate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(token),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            localStorage.setItem("token", data.accesstoken);
            localStorage.setItem("fullname", data.user.fullname);
            localStorage.setItem("ewallet", data.user.wallet.balance);
            localStorage.setItem("email", data.user.email);
            localStorage.setItem("avatar", data.user.avatar);
            localStorage.setItem("role", data.role);
            localStorage.setItem("id", data.user.id);
            console.log("role: ", data.role[0]);
            if (data.role[0] === 'Admin') {
              this.router.navigate(['/admin/dashboard']);
            } else {
              this.router.navigate(['/user-building']);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });




        // IdP data available using getAdditionalUserInfo(result)
        // result.user.getIdToken().then((idToken) => {
        //   console.log(idToken);
        // });


      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  loginWithFacebook() {
    const auth = getAuth();
    signInWithPopup(auth, this.facebook)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        const user = result.user;

        const token = { 'accessToken': user['accessToken'] };

        // this.http.post('https://13.212.24.193/api/v1/authenticate', token).subscribe({
        //   next: (data) => {
        //     console.log(data);
        //   }
        // });

        fetch("https://13.212.24.193/api/v1/authenticate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(token),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            localStorage.setItem("token", data.accesstoken);
            console.log("role: ", data.role[0]);
            if (data.role[0] === 'Admin') {
              this.router.navigate(['/admin/dashboard']);
            } else {
              this.router.navigate(['/homepage']);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        fetch("https://13.212.24.193/api/v1/authenticate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ accessToken: token }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            localStorage.setItem("token", data.accesstoken);
            localStorage.setItem("role", data.role);
            console.log("role: ", data.role[0]);
            if (data.role[0] === 'Admin') {
              this.router.navigate(['/admin/dashboard']);
            } else {
              this.router.navigate(['/homepage']);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });




        // IdP data available using getAdditionalUserInfo(result)
        // result.user.getIdToken().then((idToken) => {
        //   console.log(idToken);
        // });


      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }


}
