import { ActionReducer, Action} from "@ngrx/store";
import { AppState, INITIAL_APP_STATE} from '../store/app.state';
import { AppData, INITIAL_APP_DATA } from '../store/app.data';
import { UIState, INITIAL_UI_STATE} from '../store/ui-state';
import {GetMainComboItemsAction, GET_MAIN_COMBO_ITEMS } from '../actions/app.actions'

export const mainStoreReducer: ActionReducer<AppState> =
  (state = INITIAL_APP_STATE, action: Action) => {
            console.log('Action came in! ' + action.type);
                switch (action.type) {
                case GET_MAIN_COMBO_ITEMS: {                    
                    return handleGetMainComboItems(state, action);
                }
                default: {
                    return state;
                }
            }
        };

function handleGetMainComboItems(state: AppState, action: GetMainComboItemsAction): AppState {
    console.log( action.type + ' action being handled!');
    console.log(action);
    const newState = Object.assign({}, state);
    newState.appData.mainComboItems = action.payload;
    return newState;
}