import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Output() cardClick: EventEmitter<any> = new EventEmitter();
  @Input() text = '';
  @Input() icon = '';

  constructor() { }

  ngOnInit() {
  }
  click() {
    this.cardClick.emit();
  }


}
