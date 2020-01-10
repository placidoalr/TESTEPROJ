import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProvasComponent } from './provas/provas.component';
import { QuestoesComponent } from './questoes/questoes.component';
import { ProvasRealizadasComponent } from './provas-realizadas/provas-realizadas.component';
import { ExecProvaComponent } from './exec-prova/exec-prova.component';
import { AuthGuardService } from './login/auth-guard.service';
import { FormsModule } from '@angular/forms';



const routes: Routes = [  
  {path: '', component: ExecProvaComponent, canActivate: [AuthGuardService]},
  {path: 'Login', component: LoginComponent},
  {path: 'Provas', component: ProvasComponent},
  {path: 'Questoes', component: QuestoesComponent},
  {path: 'ProvasRealizadas', component: ProvasRealizadasComponent},
  {path: 'ExecProva', component: ExecProvaComponent},
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
