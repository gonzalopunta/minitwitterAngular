import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/models/login.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Login;

  constructor(private authService: AuthService, private route:ActivatedRoute, private router:Router) { 
    this.usuario = new Login('', '');
  }

  ngOnInit() {
  }

  doLogin() {
    this.authService.login(this.usuario).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(["/inicio"]);
    });
  }

  registrate(){
    this.router.navigate(["/registrar"]);
  }

}
