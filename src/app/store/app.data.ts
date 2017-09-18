import { ComboItem } from "../services/combo-item";

export interface AppData {
    mainComboItems: ComboItem[];
    childComboItems: ComboItem[];
}

export const INITIAL_APP_DATA: AppData = {
    mainComboItems: [],
    childComboItems: []
}