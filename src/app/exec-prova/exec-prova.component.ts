import { Component, OnInit } from '@angular/core';
import { ServerCommunicationService } from '../Providers/server-communication.service';

@Component({
  selector: 'app-exec-prova',
  templateUrl: './exec-prova.component.html',
  styleUrls: ['./exec-prova.component.css']
})
export class ExecProvaComponent implements OnInit {
  public list = [""]; // lista de provas
  public listTemp = [""]; // lista temporária 
  public prova = [""]; //prova que estiver sendo executada
  public executando: boolean = false; //Executando ou não a prova
  public nota: number;//nota do aluno
  public nome: string = "";//nome do aluno
  public retornarNota: boolean = false;//Mostrar o div com a mensagem de conclusão da prova.


  constructor(private COM: ServerCommunicationService) { }

  ngOnInit() { //Setando tudo para o valor inicial ao abrir a página
    this.nota = 0;
    this.nome = "";
    this.executando = false;
    this.retornarNota = false;


    this.COM.getAll("Prova").then(//Busca a lista de provas disponíveis
      (response: any) => {
        this.list = response.resposta;
      }
    ).catch(error => {

    });
  }

  public async executar(pr: any) {//Executar uma prova
    this.prova = pr.prova.questoes;
    this.executando = true;
  }

  public async save() { //Salvar prova com os dados da execução
    this.listTemp = this.prova.filter((x: any) => x.resp) //Armazena na listTemp os itens que possuem resposta do aluno
    if (this.listTemp.length == this.prova.length && this.nome != "") {//Se o tamanho da listTemp for igual ao tamanho da prova e o aluno tiver digitado nome permite a passagem
      this.listTemp.forEach((element: any) => {
        if (element.resp == element.certa) {//se a resposta estiver correta, adiciona o peso da questão à nota.
          this.nota += (element.peso | 0);
        }
      });
      this.retornarNota = true;//Deixa visível o div de exibição da nota
      this.executando = false;//Para de executar a prova
      let json = {//json com todos os dados da prova executada junto com nome e nota do aluno
        "nome": this.nome,
        "nota": this.nota,
        "questoes": this.listTemp
      }
      await this.COM.post("Realizada", json).then(//Enviando para o servidor que adicionará no banco
        (response: any) => {

        }
      ).catch(error => {

      });
    }
  }

}
