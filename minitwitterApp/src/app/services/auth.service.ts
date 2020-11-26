import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDto } from '../DTO/login.dto';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.interface';
import { TokenResponse } from '../models/token-response.interface';


const LOGIN_URL = 'https://www.minitwitter.com:3001/apiv1/auth/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getTokenRequest(): Observable<TokenResponse> {
    return this.http.get<TokenResponse>(LOGIN_URL);
  }

  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      LOGIN_URL,
      loginDto,
      httpOptions
    );
  }
}
