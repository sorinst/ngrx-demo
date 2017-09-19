import { ActionReducer, Action } from '@ngrx/store';
import { AppState, INITIAL_APP_STATE} from '../store/app.state';
import { AppData, INITIAL_APP_DATA } from '../store/app.data';
import { UIState, INITIAL_UI_STATE} from '../store/ui-state';
import { MainComboItemSelectedAction, MAIN_COMBO_ITEM_SELECTED,
    MAIN_COMBO_ITEMS_LOADED, MainComboItemsLoadedAction,
    CHILD_COMBO_ITEMS_LOADED, ChildComboItemsLoaded } from '../actions/app.actions';



export function appDataReducer (state = INITIAL_APP_DATA, action: Action): AppData {
    console.log('Action came in! ' + action.type);
    switch (action.type) {
        case MAIN_COMBO_ITEMS_LOADED: {
            return handleMainComboItemsLoaded(state, action);
        }     
        case CHILD_COMBO_ITEMS_LOADED: {
            return handleChildComboItemsLoaded(state, action);
        }        
        default: {
            return state;
        }
    }
}

export function uiStateReducer (state = INITIAL_UI_STATE, action: Action): UIState {
    console.log('Action came in! ' + action.type);
    switch (action.type) {        
        case MAIN_COMBO_ITEM_SELECTED: {
            return handleMainComboItemSelected(state, action);
        }
        default: {
            return state;
        }
    }
}

function handleMainComboItemsLoaded(state: AppData, action: MainComboItemsLoadedAction): AppData {
    console.log( action.type + ' action being handled!');
    console.log(action);
    const newState = Object.assign({}, state);
    newState.mainComboItems = action.payload;
    return newState;
}

function handleChildComboItemsLoaded(state: AppData, action: ChildComboItemsLoaded): AppData {
    console.log( action.type + ' action being handled!');
    console.log(action);
    const newState = Object.assign({}, state);
    newState.childComboItems = action.payload;
    return newState;
}


function handleMainComboItemSelected(state: UIState, action: MainComboItemSelectedAction): UIState {
    console.log( action.type + ' action being handled!');
    console.log(action);
    const newState = Object.assign({}, state);
    newState.mainComboSelectedItemId = action.payload;
    return newState;
}
