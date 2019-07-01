import { Action } from "redux";
import { HANDLE_EDITOR_TAB_CHANGE, CHANGE_PROJECT_FIGURE_TAB } from "./actionTypes";


type Flag = {
    flag: boolean
}

export interface HandleEditorTabChangeAction extends Action {
    type: typeof HANDLE_EDITOR_TAB_CHANGE
    payload: Flag
}

export interface ChangeProjectFigureTabAction extends Action {
    type: typeof CHANGE_PROJECT_FIGURE_TAB
    payload: Flag
}

export const handleEditorTabChangeAction = (flag: Flag): HandleEditorTabChangeAction => ({
    type: HANDLE_EDITOR_TAB_CHANGE,
    payload: flag
});

export const changeProjectFigureTabAction = (flag: Flag): ChangeProjectFigureTabAction => ({
    type: CHANGE_PROJECT_FIGURE_TAB,
    payload: flag
});

export type SelectedListActionTypes = ChangeProjectFigureTabAction | HandleEditorTabChangeAction

