import { UIState, INITIAL_UI_STATE } from "./ui-state";
import { AppData, INITIAL_APP_DATA } from "./app.data";

export interface AppState {
    uiState: UIState,
    appData: AppData
}

export const INITIAL_APP_STATE: AppState = {
    uiState: INITIAL_UI_STATE,
    appData: INITIAL_APP_DATA
}
