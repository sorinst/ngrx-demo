import { Component, OnInit } from '@angular/core';
import { FakedataService } from './services/fakedata.service';
import { ComboItem } from "./services/combo-item";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  items$: Observable<ComboItem[]>;
  childItems$: Observable<ComboItem[]>;

  constructor(private dataService: FakedataService){
    
  }

  ngOnInit() {    
    this.items$ = this.dataService.getMainCombo();
    this.childItems$ = this.dataService.getSecondaryCombo(1);
  }    

  mainItemChanged(selectedItem: ComboItem): void {
    this.childItems$ = this.dataService.getSecondaryCombo(selectedItem.itemId);
  }
}
