import { Component, OnInit } from '@angular/core';
import { ServerCommunicationService } from '../Providers/server-communication.service';

@Component({
  selector: 'app-provas',
  templateUrl: './provas.component.html',
  styleUrls: ['./provas.component.css']
})
export class ProvasComponent implements OnInit {

  public id : any;
  public questao: string;
  public r1: string;
  public r2: string;
  public r3: string;
  public r4: string;
  public c: string;
  public listQuest = [""];
  public list = [""];
  public listTemp = [""];
  public editando : boolean = false;


  constructor(private COM : ServerCommunicationService) {  }

  ngOnInit() {
    this.id = 0;
    this.questao = '';
    this.r1 = '';
    this.r2 = '';
    this.r3 = '';
    this.r4 = '';
    this.c = 'r1';
    this.editando = false;

    //document.getElementById('text').focus();
    

    this.COM.getAll("Prova").then(
      (response : any) => {
        this.list = response.resposta;
      }
    ).catch(error => {

    });
    this.COM.getAll("Questao").then(
      (response : any) => {
        this.listQuest = response.resposta;
      }
    ).catch(error => {

    });
    
  }


  public async save() {

    console.log(this.listQuest)
    this.listTemp = this.listQuest.filter((x: any) => x.selected)
    if((this.listTemp.length == (this.listTemp.filter((x: any) => x.peso)).length) && (this.listTemp.reduce((a:any,b:any) => (a | 0) + (b.peso | 0), 0))==100){
      let json = {
        "questoes" : this.listTemp
      }
      await this.COM.post("Prova",json).then(
        (response : any) => {

          this.ngOnInit();
        }
      ).catch(error => {
        
      });
    }else{
      console.log("owh"+this.listTemp.reduce((a:any,b:any) => (a | 0) + (b.peso | 0), 0))
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
  }*/
  keyDownFunction(event,qt) {
    if(event.keyCode == 13) {
      if(!this.editando){
        this.save();
      }else{
        //this.saveEdit(ct);
      }
    }
  }
}
