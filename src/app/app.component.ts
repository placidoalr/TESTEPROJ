import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TESTEPROJ';
  logado: boolean = true;
  constructor(private route: Router, private authService: AuthService) {

  }
  ngOnInit() {

    this.logado = this.authService.usuarioEstaAutenticado();
  }

  public click(rota: string) {
    console.log(rota);
    this.route.navigateByUrl(rota);
    this.logado = this.authService.usuarioEstaAutenticado();
  }
  public logOut() {
    this.authService.logOut();
    this.logado = this.authService.usuarioEstaAutenticado();
    this.route.navigateByUrl("");
  }

}
