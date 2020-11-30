import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.interface';
import { Registrar } from '../models/registrar.interface';
import { RegistrarResponse } from '../models/registrar-response.interface';
import { Login } from '../models/login.interface';


const LOGIN_URL = 'https://www.minitwitter.com:3001/apiv1/auth/login';
const SIGNUP_URL ='https://www.minitwitter.com:3001/apiv1/auth/signup';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginDto: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      LOGIN_URL,
      loginDto,
      httpOptions
    );
  }

  registro(registrar: Registrar): Observable<RegistrarResponse> {
    return this.http.post<RegistrarResponse>(
      SIGNUP_URL,
      registrar,
      httpOptions
    );
  }
  
}
