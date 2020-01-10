import { Injectable } from '@angular/core';
import { HttpService } from '../Providers/http.service';

@Injectable()
export class QuestoesService {

  constructor( 
    public httpService : HttpService
  ) {}

  public post (json : any){
    console.log("oooooo"+json)
    this.httpService.url = 'http://localhost:3000/addQuestao';
    return this.httpService.post(json);
  }
  public getAll (){
    this.httpService.url = 'http://localhost:3000/getQuestao';
    return this.httpService.get();
  }
  public delete (name:string){
    let json = {
      name : name
    };
    this.httpService.url = 'http://localhost:3000/DelQuestao';
    return this.httpService.patch(json);
  }
  public edit (name:string,namelast:string){
    let json = {
      name : name,
      namelast : namelast
    };
    this.httpService.url = 'http://localhost:3000/EditCT';
    return this.httpService.post(json);
  }
}
