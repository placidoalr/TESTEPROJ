import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProvasComponent } from './provas/provas.component';
import { QuestoesComponent } from './questoes/questoes.component';
import { ProvasRealizadasComponent } from './provas-realizadas/provas-realizadas.component';
import { ExecProvaComponent } from './exec-prova/exec-prova.component';
import { AuthGuardService } from './login/auth-guard.service';



const routes: Routes = [  
  {path: '', component: ExecProvaComponent, canActivate: [AuthGuardService]},
  {path: 'Login', component: LoginComponent},
  {path: 'Provas', component: ProvasComponent, canActivate: [AuthGuardService]},
  {path: 'Questoes', component: QuestoesComponent, canActivate: [AuthGuardService]},
  {path: 'ProvasRealizadas', component: ProvasRealizadasComponent, canActivate: [AuthGuardService]},
  {path: 'ExecProva', component: ExecProvaComponent, canActivate: [AuthGuardService]},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
