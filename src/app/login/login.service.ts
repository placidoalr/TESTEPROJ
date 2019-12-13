import { Injectable } from '@angular/core';
import { HttpService } from '../Providers/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public httpService: HttpService) { }

  public login (username : string, password : string){
    let json = {
        userName : username,
        password : password
    };

    this.httpService.url = 'http://localhost:3000/logon';
    return this.httpService.post(json)
  }

}
