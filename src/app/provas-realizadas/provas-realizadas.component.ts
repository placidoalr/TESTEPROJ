import { Component, OnInit } from '@angular/core';
import { ServerCommunicationService } from '../Providers/server-communication.service';

@Component({
  selector: 'app-provas-realizadas',
  templateUrl: './provas-realizadas.component.html',
  styleUrls: ['./provas-realizadas.component.css']
})
export class ProvasRealizadasComponent implements OnInit {
  public list = [""];
  public listTemp = [""];
  public prova = [""];
  public executando: boolean = false;
  public nota: number;
  public nome: string = "";
  public retornarNota: boolean = false;


  constructor(private COM: ServerCommunicationService) { }

  ngOnInit() {
    this.nota = 0;
    this.nome = "";
    this.executando = false;
    this.retornarNota = false;
    //document.getElementById('text').focus();


    this.COM.getAll("Realizada").then(
      (response: any) => {
        this.list = response.realizadas;
        console.table(this.list)
      }
    ).catch(error => {

    });
  }
  public async executar(pr: any) {
    console.log(pr.prova)
    this.prova = pr.prova;
    this.executando = true;

  }

  public async save() {
    console.log(this.prova)
    this.listTemp = this.prova.filter((x: any) => x.resp)
    if (this.listTemp.length == this.prova.length && this.nome != "") {
      this.listTemp.forEach((element: any) => {
        if (element.resp == element.certa) {
          this.nota += (element.peso / 10 | 0);
        }
      });
      this.retornarNota = true;
      this.executando = false;
      let json = {
        "nome": this.nome,
        "nota": this.nota,
        "questoes": this.listTemp
      }
      console.log(this.nota)
      await this.COM.post("Realizada", json).then(
        (response: any) => {

        }
      ).catch(error => {

      });
    }
  }

  //namelast é pra fazer o where do nome que será alterado.
  /*public async editar(ct){
    
    this.questao = ct.NOME;
    this.namelast = ct.NOME;
    this.editando = true;
    document.getElementById('text').focus();
  }
  public async saveEdit(ct) {
    await this.QUEST.edit(this.name,this.namelast).then(
      (response : any) => {

      }
    ).catch(error => {

    });
    this.ngOnInit();
  }

  public async deletar(ct){
    await this.QUEST.delete(ct.NOME).then(
      (response : any) => {

      }
    ).catch(error => {

    });
    this.ngOnInit();
  }
  keyDownFunction(event,qt) {
    if(event.keyCode == 13) {
      if(!this.editando){
        this.save();
      }else{
        //this.saveEdit(ct);
      }
    }
  }
*/
}