import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ServerCommunicationService {

  constructor( 
    public httpService : HttpService
  ) {}

  public post (api:string,json : any){
    this.httpService.url = 'http://localhost:3000/add'+api;
    return this.httpService.post(json);
  }
  public getAll (api:string){
    this.httpService.url = 'http://localhost:3000/get'+api;
    return this.httpService.get();
  }
  public delete (api:string,json:any){
    this.httpService.url = 'http://localhost:3000/del'+api;
    return this.httpService.patch(json);
  }
  public edit (api:string,json:any){
    this.httpService.url = 'http://localhost:3000/edit'+api;
    return this.httpService.post(json);
  }
}
