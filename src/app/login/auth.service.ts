import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<Boolean>();

  constructor(private router: Router, private lg: LoginService) { }

  fazerLogin(nome, senha) {
    this.lg.login(nome, senha).then(
      (response: any) => {
        if (response.token != '') {
          this.usuarioAutenticado = true;
          this.mostrarMenuEmitter.emit(true);
          this.router.navigate(['./']);
        } else {
          this.usuarioAutenticado = false;
          this.mostrarMenuEmitter.emit(false);
        }
      }
    ).catch(error => {

    });
  }
  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
  logOut() {
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['./']);
  }
}
