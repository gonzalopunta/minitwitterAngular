import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registrar } from 'src/app/models/registrar.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registrarNuevoUsuario : Registrar;

  constructor( private authService:AuthService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.registrarNuevoUsuario = new Registrar("", "", "");
  }

  registrar(){
    this.authService.registro(this.registrarNuevoUsuario).subscribe (res => {
      this.router.navigate([""]);
    })
  }

  irALogin(){
    this.router.navigate([""]);
  }
}
