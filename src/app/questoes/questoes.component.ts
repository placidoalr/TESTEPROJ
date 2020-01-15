import { Component, OnInit } from '@angular/core';
import { ServerCommunicationService } from '../Providers/server-communication.service';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent implements OnInit {

  public id: any;
  public questao: string;
  public a: string;
  public b: string;
  public c: string;
  public d: string;
  public certa: string;
  public list = [];
  public editando: boolean = false;


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

    document.getElementById('text').focus();


    this.COM.getAll("Questao").then(
      (response: any) => {
        console.log("lista" + response.resposta)
        this.list = response.resposta;
      }
    ).catch(error => {

    });

  }


  public async save() {
    if ((this.questao != '' && this.a != '' && this.b != '' && this.c != '' && this.d != '' && this.c != '')
      && (this.questao != undefined && this.a != undefined && this.b != undefined && this.c != undefined && this.d != undefined && this.c != undefined)) {

      console.log(this.questao + " / " + this.a + " / " + this.b + " / " + this.c + " / " + this.d + " / " + this.c)
      let json = {
        "ask": this.questao,
        "a": this.a,
        "b": this.b,
        "c": this.c,
        "d": this.d,
        "certa": this.certa,
      }
      console.log(json)
      await this.COM.post("Questao", json).then(
        (response: any) => {

          this.ngOnInit();
        }
      ).catch(error => {

      });
    }
  }
  //namelast é pra fazer o where do nome que será alterado.
  public async editar(qt) {
    this.id = qt.id
    this.questao = qt.ask
    this.a = qt.a
    this.b = qt.b
    this.c = qt.c
    this.d = qt.d
    this.certa = qt.certa
    this.editando = true;
    document.getElementById('text').focus();
  }
  public async saveEdit(qt) {
    let json = {
      "ask": this.questao,
      "id": this.id,
      "a": this.a,
      "b": this.b,
      "c": this.c,
      "d": this.d,
      "certa": this.certa
    }
    console.log(json)
    await this.COM.edit("Questao", json).then(
      (response: any) => {

        this.ngOnInit();
      }
    ).catch(error => {

    });
  }
  keyDownFunction(event, qt) {
    if (event.keyCode == 13) {
      if (!this.editando) {
        this.save();
      } else {
        this.saveEdit(qt);
      }
    }
  }
}

