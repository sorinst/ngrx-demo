import {Action} from '@ngrx/store';
import { AppData } from '../store/app.data';
import { ComboItem } from '../services/combo-item';

export const GET_MAIN_COMBO_ITEMS: string = 'GET_MAIN_COMBO_ITEMS';
export const MAIN_COMBO_ITEMS_LOADED: string = 'MAIN_COMBO_ITEMS_LOADED';
export const GET_CHILD_COMBO_ITEMS: string = 'GET_CHILD_COMBO_ITEMS';
export const CHILD_COMBO_ITEMS_LOADED: string = 'CHILD_COMBO_ITEMS_LOADED';
export const MAIN_COMBO_ITEM_SELECTED: string = 'MAIN_COMBO_ITEM_SELECTED';


export class GetMainComboItemsAction implements Action {

    readonly type = GET_MAIN_COMBO_ITEMS;

    constructor ( ) {

    }
}

export class MainComboItemsLoadedAction implements Action {
    readonly type = MAIN_COMBO_ITEMS_LOADED;

    constructor(public payload?: ComboItem[]) {

    }
}


export class GetChildComboItemsAction implements Action {

    readonly type = GET_CHILD_COMBO_ITEMS;

    constructor (public payload?: number ) {

    }
}

export class ChildComboItemsLoaded implements Action {

    readonly type = CHILD_COMBO_ITEMS_LOADED;

    constructor (public payload?: ComboItem[] ) {

    }
}


export class MainComboItemSelectedAction implements Action {
    readonly type = MAIN_COMBO_ITEM_SELECTED;

    constructor(public payload?: number) {

    }
}
