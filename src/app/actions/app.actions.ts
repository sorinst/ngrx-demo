import {Action} from '@ngrx/store'
import { AppData } from "../store/app.data";
import { ComboItem } from "../services/combo-item";

export const GET_MAIN_COMBO_ITEMS: string = 'GET_MAIN_COMBO_ITEMS';

export class GetMainComboItemsAction implements Action {
    
    readonly type = GET_MAIN_COMBO_ITEMS;
    
    constructor (public payload?: ComboItem[] ){

    }
}