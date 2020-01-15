import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nome: string;
  public senha: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.nome = "";
    this.senha = "";
    document.getElementById('usuario').focus();
    this.fazerLogin();
  }

  fazerLogin() {
    this.authService.fazerLogin(this.nome, this.senha);
  }
  keyDownFunction(event) {
    if (event.keyCode == 13) {

      this.fazerLogin();
    }
  }
}
