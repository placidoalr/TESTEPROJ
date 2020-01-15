import { Component, OnInit } from '@angular/core';
import { ServerCommunicationService } from '../Providers/server-communication.service';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent implements OnInit {

  public id: any;
  public questao: string;//pergunta
  public a: string;//questões de a à d
  public b: string;
  public c: string;
  public d: string;
  public certa: string; //questão correta
  public list = [];//lista de questões já adicionadas
  public editando: boolean = false;//Se está editando uma questão ou não


  constructor(private COM: ServerCommunicationService) { }

  ngOnInit() {
    this.id = 0;
    this.questao = '';
    this.a = '';
    this.b = '';
    this.c = '';
    this.d = '';
    this.certa = 'a';
    this.editando = false;

    this.COM.getAll("Questao").then(//busca todas as questões existentes
      (response: any) => {
        this.list = response.resposta;
      }
    ).catch(error => {

    });

  }


  public async save() {
    if ((this.questao != '' && this.a != '' && this.b != '' && this.c != '' && this.d != '' && this.c != '')
      && (this.questao != undefined && this.a != undefined && this.b != undefined && this.c != undefined && this.d != undefined && this.c != undefined)) {

      let json = {
        "ask": this.questao,
        "a": this.a,
        "b": this.b,
        "c": this.c,
        "d": this.d,
        "certa": this.certa,
      }
      await this.COM.post("Questao", json).then(//adiciona questão
        (response: any) => {
          this.ngOnInit();
        }
      ).catch(error => {

      });
    }
  }

  public async editar(qt) {//adiciona os dados da questão selecionada para os campos que serão editados e seta o editando como true
    this.id = qt.id
    this.questao = qt.ask
    this.a = qt.a
    this.b = qt.b
    this.c = qt.c
    this.d = qt.d
    this.certa = qt.certa
    this.editando = true;
  }

  public async saveEdit(qt) {//salva a edição enviando para o .edit 
    let json = {
      "ask": this.questao,
      "id": this.id,
      "a": this.a,
      "b": this.b,
      "c": this.c,
      "d": this.d,
      "certa": this.certa
    }

    await this.COM.edit("Questao", json).then(
      (response: any) => {

        this.ngOnInit();
      }
    ).catch(error => {

    });
  }

}

