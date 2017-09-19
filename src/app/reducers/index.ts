import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import * as fromApp from './app.reducers';
import {AppState} from '../store/app.state';


export const reducers: ActionReducerMap<AppState> = {
    uiState: fromApp.uiStateReducer,
    appData: fromApp.appDataReducer
}