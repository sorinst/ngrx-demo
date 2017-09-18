import { Component, OnInit } from '@angular/core';
import { FakedataService } from './services/fakedata.service';
import { ComboItem } from "./services/combo-item";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppState } from "./store/app.state";
import { GetMainComboItemsAction } from "./actions/app.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  items$: Observable<ComboItem[]>;
  childItems$: Observable<ComboItem[]>;

  constructor(private dataService: FakedataService, private store: Store<AppState>){ 
    store.subscribe(state=>console.log('subscribed to store in app component', state));
  }

  ngOnInit() {        
    this.items$ = this.dataService.getMainCombo();
    this.childItems$ = this.dataService.getSecondaryCombo(1);

    this.dataService.getMainCombo().subscribe(data=>this.store.dispatch(new GetMainComboItemsAction(data)))
  }    

  mainItemChanged(selectedItem: ComboItem): void {
    this.childItems$ = this.dataService.getSecondaryCombo(selectedItem.itemId);
  }
}
