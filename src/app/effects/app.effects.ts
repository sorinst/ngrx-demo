import { Injectable } from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {GET_MAIN_COMBO_ITEMS, GetMainComboItemsAction,
    GET_CHILD_COMBO_ITEMS, GetChildComboItemsAction,
    MAIN_COMBO_ITEMS_LOADED, MainComboItemsLoadedAction,
    MAIN_COMBO_ITEM_SELECTED, MainComboItemSelectedAction,
    CHILD_COMBO_ITEMS_LOADED, ChildComboItemsLoaded } from '../actions/app.actions';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import { FakedataService } from '../services/fakedata.service';




@Injectable()
export class ComboEffectsService {

  constructor(private actions$: Actions, private dataService: FakedataService ) {

  }

  @Effect() mainComboItems$: Observable<Action> = this.actions$
      .ofType(GET_MAIN_COMBO_ITEMS)
      .debug('getting items')
      .switchMap(action => this.dataService.getMainCombo())
      .debug('called get combo items')
      .map(allUserData => new MainComboItemsLoadedAction(allUserData) );


@Effect() comboItemSelected$: Observable<Action> = this.actions$
      .ofType(MAIN_COMBO_ITEM_SELECTED)
      .map((action: MainComboItemSelectedAction) =>  new GetChildComboItemsAction(action.payload));

@Effect() childComboItems$: Observable<Action> = this.actions$
    .ofType(GET_CHILD_COMBO_ITEMS)
    .debug('getting child items')
    .switchMap((action: GetChildComboItemsAction) => this.dataService.getSecondaryCombo(action.payload))
    .debug('called get child combo items')
    .map(childItems => new ChildComboItemsLoaded(childItems) );
}
