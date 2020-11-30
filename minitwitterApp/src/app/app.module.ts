import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { RegistroComponent } from './componets/registro/registro.component';
import { AuthService } from './services/auth.service';
import { TweetsComponent } from './componets/tweets/tweets.component';
import { Routes } from '@angular/router';
import { Registrar } from './models/registrar.interface';

const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "registrar", component: Registrar},
  { path: "inicio", component: TweetsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    FlexLayoutModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
