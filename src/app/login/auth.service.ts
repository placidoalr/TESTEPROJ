import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuarioAutenticado: boolean = false; //Diz se o usuário está logado ou não

  mostrarMenuEmitter = new EventEmitter<Boolean>();
  

  constructor(private router: Router, private lg: LoginService) { }

  fazerLogin(nome, senha) { //recebe nome e senha e envia para o server verificar se é o nome e senha cadastrados
    this.lg.login(nome, senha).then(
      (response: any) => {
        if (response.token != '') { //se for correto autentica o usuário e vai para a página de questões
          this.usuarioAutenticado = true;
          this.mostrarMenuEmitter.emit(true);
          this.router.navigate(['./Questoes']);
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

  logOut() {//tira autenticação do usuário e volta para a página de login
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['./Login']);
  }
}
