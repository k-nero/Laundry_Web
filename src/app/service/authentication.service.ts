import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from '../model/user.model';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Observable } from 'rxjs';

// export interface AuthResponseData {
//     kind: string;
//     idToken: string;
//     email: string;
//     refreshToken: string;
//     expiresIn: string;
//     localId: string;
// }

@Injectable({ providedIn: 'root' })
export class AuthService implements OnInit {


    user = new Subject<User>();

    provider: any

    constructor(private http: HttpClient) { }


    ngOnInit(): void {
        const provider = new GoogleAuthProvider();
        this.provider = provider;
    }


    // signup(email: string, password: string) {
    //     return this.http
    //         .post<AuthResponseData>(
    //             'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBRhZNDIoHVM2pZAxEm9Og6WcKC-pAoGSs',
    //             {
    //                 email: email,
    //                 password: password,
    //                 returnSecureToken: true
    //             }
    //         )
    //         .pipe(
    //             catchError(errorRes => {
    //                 let errorMessage = 'An unknown error occurred!';
    //                 if (!errorRes.error || !errorRes.error.error) {
    //                     return throwError(errorMessage);
    //                 }
    //                 switch (errorRes.error.error.message) {
    //                     case 'EMAIL_EXISTS':
    //                         errorMessage = 'This email exists already';
    //                 }
    //                 return throwError(errorMessage);
    //             })
    //         );
    // }



    // login(email: string, password: string) {
    //     return this.http
    //         .post<AuthResponseData>(
    //             // 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBRhZNDIoHVM2pZAxEm9Og6WcKC-pAoGSs',
    //             'https://13.212.24.193/api/v1/authenticate/login',
    //             {
    //                 email: email,
    //                 password: password,

    //                 // returnSecureToken: true
    //             }
    //         )
    //         .pipe(
    //             catchError(this.handleError),
    //             tap(resData => {
    //                 this.handleAuthentication(
    //                     resData.email,
    //                     resData.localId,
    //                     resData.idToken,     
    //                     +resData.expiresIn
    //                 );
    //             })
    //         );
    // }




    loginWithGoogle() {
        const auth = getAuth();
        signInWithPopup(auth, this.provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                // The signed-in user info.
                const user = result.user;
                const token = user.getIdToken();
                console.log(user);
                console.log(user.getIdToken);
                const tokenLogin = { "accessToken": token };
                console.log(tokenLogin);
                return fetch("https://13.212.24.193/api/v1/authenticate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(tokenLogin)
                })
                    .then((response) => response.json())
                    .then((data) => {
                        return data;
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
                // IdP data available using getAdditionalUserInfo(result)
                // ...
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



    private handleAuthentication(
        email: string,
        userId: string,
        token: string,
        expiresIn: number
    ) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
        }
        return throwError(errorMessage);
    }
}
