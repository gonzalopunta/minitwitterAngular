import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minitwitterApp';

  constructor(private authService: AuthService){}

  public requestToken(){
    this.authService.getTokenRequest().subscribe( res =>{
      localStorage.setItem('token', res.token);
    });
  }
}
