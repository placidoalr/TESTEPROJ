import { Component, OnInit } from '@angular/core';
import { ServerCommunicationService } from '../Providers/server-communication.service';

@Component({
  selector: 'app-provas-realizadas',
  templateUrl: './provas-realizadas.component.html',
  styleUrls: ['./provas-realizadas.component.css']
})
export class ProvasRealizadasComponent implements OnInit {

  public id : any;
  public questao: string;
  public r1: string;
  public r2: string;
  public r3: string;
  public r4: string;
  public c: string;
  public listQuest = [];
  public list = [];
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

    document.getElementById('text').focus();
    

    this.COM.getAll("ProvaRealizada").then(
      (response : any) => {
        console.log("lista"+response.resposta)
        this.listQuest = response.resposta;
      }
    ).catch(error => {

    });
    
  }


  public async save() {
    if((this.questao!=''&&this.r1!=''&&this.r2!=''&&this.r3!=''&&this.r4!=''&&this.c!='')
    &&(this.questao!=undefined&&this.r1!=undefined&&this.r2!=undefined&&this.r3!=undefined&&this.r4!=undefined&&this.c!=undefined)){

      console.log(this.questao+" / "+this.r1+" / "+this.r2+" / "+this.r3+" / "+this.r4+" / "+this.c)
      let json = {
        "ask": this.questao,
        "r1" : this.r1,
        "r2" : this.r2,
        "r3" : this.r3,
        "r4" : this.r4,
        "certa" : this.c,
      }
      console.log(json)
      await this.COM.post("ProvaRealizada",json).then(
        (response : any) => {

          this.ngOnInit();
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
