import { Component, OnInit } from '@angular/core';
import { ServerCommunicationService } from '../Providers/server-communication.service';

@Component({
  selector: 'app-provas-realizadas',
  templateUrl: './provas-realizadas.component.html',
  styleUrls: ['./provas-realizadas.component.css']
})
export class ProvasRealizadasComponent implements OnInit {
  public list = [""];//Lista de provas realizadas
  public listTemp = [""];//Lista temporária
  public prova = [""];//Prova selecionada para exibir os dados completos
  public executando: boolean = false;//se está exibindo uma prova ou não


  constructor(private COM: ServerCommunicationService) { }

  ngOnInit() {
    this.executando = false;

    this.COM.getAll("Realizada").then(//busca as provas realizadas
      (response: any) => {
        this.list = response.realizadas;
        console.table(this.list)
      }
    ).catch(error => {

    });
  }

  public async executar(pr: any) {//Exibe a prova selecionada
    this.prova = pr.prova;
    this.executando = true;

  }

}
