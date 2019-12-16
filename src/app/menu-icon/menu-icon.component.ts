import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.css']
})
export class MenuIconComponent implements OnInit {
  @Output() iconClick : EventEmitter<any> = new EventEmitter();
  @Input() text = '';
  @Input() icon = '';
  

  constructor() { }

  ngOnInit() {
    
  }

  click(){
    this.iconClick.emit();
  }

}
