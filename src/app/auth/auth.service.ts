import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({  providedIn: 'root'})
export class AuthenticationService {
    public currentUser: User;
    loginUrl = environment.baseUrl + '/api/login/'
    returnUrl: string = '/'

    constructor(private httpClient: HttpClient, private router: Router) {
    }

    public getUser(): User {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    public login(username: String, password: String) {
        this.httpClient.post<any>
            (this.loginUrl, {
                'username': username,
                'password': password
                }).subscribe((result: any)=> {
                    this.currentUser = new User();
                    this.currentUser.token = result['token'];
                    this.currentUser.username = result['username'];
                    this.currentUser.is_manager = result['is_manager'];
                    this.currentUser.is_assistant = result['is_assistant'];
                    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
                    this.router.navigateByUrl(this.returnUrl);

                })
    }

    public logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        localStorage.clear();
    }
}
