import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ServerCommunicationService {

  constructor(
    public httpService: HttpService
  ) { }

  public post(api: string, json: any) {//Envia o json no endpoint informado com o API
    this.httpService.url = 'http://localhost:3000/add' + api;
    return this.httpService.post(json);
  }
  public getAll(api: string) {//retorna um select 
    this.httpService.url = 'http://localhost:3000/get' + api;
    return this.httpService.get();
  }
  public delete(api: string, json: any) {//Não foi utilizado mas fica de exemplo de delete
    this.httpService.url = 'http://localhost:3000/del' + api;
    return this.httpService.patch(json);
  }
  public edit(api: string, json: any) {//envia uma request de edição para o api informado
    this.httpService.url = 'http://localhost:3000/edit' + api;
    return this.httpService.post(json);
  }
}
