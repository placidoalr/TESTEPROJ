import { Component, OnInit } from '@angular/core';
import { ServerCommunicationService } from '../Providers/server-communication.service';

@Component({
  selector: 'app-provas',
  templateUrl: './provas.component.html',
  styleUrls: ['./provas.component.css']
})
export class ProvasComponent implements OnInit {

  public listQuest = [""];//lista de questões
  public list = [""];//lista de provas
  public listTemp = [""];//lista temporária


  constructor(private COM: ServerCommunicationService) { }

  ngOnInit() {
    this.COM.getAll("Prova").then( //Busca lista de provas
      (response: any) => {
        this.list = response.resposta;
      }
    ).catch(error => {

    });
    this.COM.getAll("Questao").then(//Busca lista de questões
      (response: any) => {
        this.listQuest = response.resposta;
      }
    ).catch(error => {

    });
  }

  public async save() {
    this.listTemp = this.listQuest.filter((x: any) => x.selected) //armazena as questões selecionadas depois compara o tamanho da lista temp com os que tem valores de peso e se a soma do peso é 100
    if ((this.listTemp.length == (this.listTemp.filter((x: any) => x.peso)).length) && (this.listTemp.reduce((a: any, b: any) => (a | 0) + (b.peso | 0), 0)) == 100) {
      let json = {
        "questoes": this.listTemp
      }
      await this.COM.post("Prova", json).then(//Cria a prova
        (response: any) => {
          this.ngOnInit();
        }
      ).catch(error => {

      });
    }

  }
}
