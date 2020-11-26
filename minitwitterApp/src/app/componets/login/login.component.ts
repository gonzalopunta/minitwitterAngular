import { Component, OnInit } from '@angular/core';
import { LoginDto } from 'src/app/DTO/login.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: LoginDto;

  constructor(private authService: AuthService) { 
    this.usuario = new LoginDto('', '');
  }

  ngOnInit() {
  }

  doLogin() {
    // Llamar a un servicio que mande la petición de login
    // a la API.
    this.authService.login(this.usuario).subscribe(res => {
        alert('API TOKEN ' + res.token);
    });
  }

}
