import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProvasComponent } from './provas/provas.component';
import { QuestoesComponent } from './questoes/questoes.component';
import { ProvasRealizadasComponent } from './provas-realizadas/provas-realizadas.component';
import { ExecProvaComponent } from './exec-prova/exec-prova.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { HttpService } from './Providers/http.service';
import { AuthGuardService } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';
import { HttpModule } from '@angular/http';
import { ServerCommunicationService } from './Providers/server-communication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProvasComponent,
    QuestoesComponent,
    ProvasRealizadasComponent,
    ExecProvaComponent,
    CardsComponent,
    MenuIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServerCommunicationService,LoginService,HttpService,AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
