import { Component, OnInit } from '@angular/core';
import { FakedataService } from './services/fakedata.service';
import { ComboItem } from './services/combo-item';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { GetMainComboItemsAction , GetChildComboItemsAction} from './actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  items$: Observable<ComboItem[]>;
  childItems$: Observable<ComboItem[]>;

  constructor(private dataService: FakedataService, private store: Store<AppState>) {
    this.items$ = this.store.select(state => state.appData.mainComboItems);
    this.childItems$ = this.store.select(state => state.appData.childComboItems);
  }

  ngOnInit() {
    this.store.dispatch(new GetMainComboItemsAction());
  }

  mainItemChanged(selectedItem: ComboItem): void {
    //this.childItems$ = this.dataService.getSecondaryCombo(selectedItem.itemId);
    this.store.dispatch(new GetChildComboItemsAction(selectedItem.itemId));
  }
}
