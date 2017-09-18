import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ComboItem } from "../services/combo-item";

@Component({
  selector: 'app-custom-combo',
  templateUrl: './custom-combo.component.html',
  styleUrls: ['./custom-combo.component.css']
})
export class CustomComboComponent implements OnInit {

  @Input() comboItems: ComboItem[];
  
  @Output() selectedItemChange :  EventEmitter<any>;

  constructor() { 
    this.selectedItemChange = new EventEmitter<any>();    
  }

  ngOnInit() {
  }

   onClick(item): void {
    this.selectedItemChange.emit(item);
  }
  
}
