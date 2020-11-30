import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Login;

  constructor(private authService: AuthService) { 
    this.usuario = new Login('', '');
  }

  ngOnInit() {
  }

  doLogin() {
    // Llamar a un servicio que mande la petición de login
    // a la API.
    this.authService.login(this.usuario).subscribe(res => {
      localStorage.setItem('token', res.token);
    });
  }

}
