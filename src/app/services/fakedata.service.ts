import { Injectable } from '@angular/core';
import { ComboItem } from './combo-item';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class FakedataService {

  constructor() { }

  getMainCombo(): Observable<ComboItem[]> {
    return Observable.of(this._createComboItemArray(null, "item "));
  }

  getSecondaryCombo(parentId: number): Observable<ComboItem[]> {
    return  Observable.of(this._createComboItemArray(parentId, "child of " + parentId.toString() + " - "));
  }

  private _createComboItemArray(parentId: number, text: string): ComboItem[] {
    let items: ComboItem[] = new Array<ComboItem>();

    for (let i = 0; i < 10; i++){
      items.push(new ComboItem(i + 1, text + (i + 1).toString(), parentId ));
    }
    return items;
  }
}
