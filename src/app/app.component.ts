import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TESTEPROJ';
  constructor(private route : Router){

  }
  ngOnInit(){
    
      mostrar => this.mostrarMenu = mostrar;
  }
  
  public click(rota : string){
    console.log(rota);
    this.route.navigateByUrl(rota);
  }
  mostrarMenu : boolean = false;

}
