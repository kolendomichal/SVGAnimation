import { CHANGE_FIGURE_VALUE, ADD_PROJECT, DELETE_PROJECT, SET_CURRENT_PROJECT, DELETE_FIGURE, ADD_FIGURE, SHOW_FIGURE_EDITOR, CHANGE_ACTIVE_SVG_FIGURE, IMPORT_FIGURES_FROM_FILE, HANDLE_IMPORTED_PROJECT_FILE, CHANGE_PROJECT_NAME } from "./actionTypes";
import { Action } from "redux";
import { Figure } from "../../../static/Figure";


type FigureValue = {
    type: string,
    value: string | number | boolean
}

export interface ChangeFigureValueAction extends Action {
    type: typeof CHANGE_FIGURE_VALUE,
    payload: FigureValue
}

export function changeFigureValueAction(figureValue: FigureValue): ChangeFigureValueAction {
    return {
        type: CHANGE_FIGURE_VALUE,
        payload: figureValue
    }
}



export interface AddProjectAction extends Action {
    type: typeof ADD_PROJECT,
    payload: undefined
}

export const addProjectAction = (): AddProjectAction => ({
    type: ADD_PROJECT,
    payload: undefined
});


type Uuid = {
    id: string
}
export interface DeleteProjectAction extends Action {
    type: typeof DELETE_PROJECT,
    payload: Uuid
}

export const deleteProjectAction = (id: Uuid): DeleteProjectAction => ({
    type: DELETE_PROJECT,
    payload: id
});



export interface SetCurrentProjectAction extends Action {
    type: typeof SET_CURRENT_PROJECT,
    payload: Uuid
}


export const setCurrentProjectAction = (id: Uuid): SetCurrentProjectAction => ({
    type: SET_CURRENT_PROJECT,
    payload: id
});



export interface AddFigureAction extends Action {
    type: typeof ADD_FIGURE,
    payload: undefined
}

export const addFigureAction = (): AddFigureAction => ({
    type: ADD_FIGURE,
    payload: undefined
});



type Id = {
    id: number;
}

export interface DeleteFigureAction extends Action {
    type: typeof DELETE_FIGURE,
    payload: Id
}

export const deleteFigureAction = (id: number): DeleteFigureAction => ({
    type: DELETE_FIGURE,
    payload: { id }
});



export interface ShowFigureEditorAction extends Action {
    type: typeof SHOW_FIGURE_EDITOR,
    payload: Id
}

export const showFigureEditorAction = (id: number): ShowFigureEditorAction => ({
    type: SHOW_FIGURE_EDITOR,
    payload: { id }
})



type Hrefid = {
    hrefid: string
}

export interface ChangeActiveSVGFigureAction extends Action {
    type: typeof CHANGE_ACTIVE_SVG_FIGURE
    payload: Hrefid
}

export const changeActiveSVGFigureAction = (hrefid: string): ChangeActiveSVGFigureAction => ({
    type: CHANGE_ACTIVE_SVG_FIGURE,
    payload: { hrefid }
})



type ImportedFiguresList = {
    importedFiguresList: Figure[]
}

export interface ImportFiguresFromFileAction extends Action {
    type: typeof IMPORT_FIGURES_FROM_FILE
    payload: ImportedFiguresList
}

export const importFiguresFromFileAction = (importedFiguresList: Figure[]): ImportFiguresFromFileAction => ({
    type: IMPORT_FIGURES_FROM_FILE,
    payload: { importedFiguresList }
})



type FileContent = {
    fileContent: string
}

export interface HandleImportedProjectFileAction extends Action {
    type: typeof HANDLE_IMPORTED_PROJECT_FILE,
    payload: FileContent
}

export const handleImportedProjectFileAction = (fileContent: FileContent): HandleImportedProjectFileAction => ({
    type: HANDLE_IMPORTED_PROJECT_FILE,
    payload: fileContent
})



type Name = {
    name: string
}
export interface ChangeProjectNameAction extends Action {
    type: typeof CHANGE_PROJECT_NAME,
    payload: Name
}

export const changeProjectNameAction = (name: Name): ChangeProjectNameAction => ({
    type: CHANGE_PROJECT_NAME,
    payload: name
})


export type SVGFiguresListActions = AddFigureAction | DeleteFigureAction | ShowFigureEditorAction

export type SVGProjectsListActions = AddProjectAction | DeleteProjectAction | SetCurrentProjectAction

export type FiguresProjectsActionTypes =
    AddProjectAction |
    DeleteProjectAction |
    SetCurrentProjectAction |
    AddFigureAction |
    DeleteFigureAction |
    ShowFigureEditorAction |
    ChangeActiveSVGFigureAction |
    ImportFiguresFromFileAction |
    HandleImportedProjectFileAction |
    ChangeFigureValueAction |
    ChangeProjectNameAction

