import { ENABLE_ANIMATION,CHANGE_FIGURE_VALUE,HANDLE_EDITOR_TAB_CHANGE, CHANGE_PROJECT_FIGURE_TAB, ADD_PROJECT, DELETE_PROJECT, SET_CURRENT_PROJECT, DELETE_FIGURE, ADD_FIGURE, SHOW_FIGURE_EDITOR,CHANGE_ACTIVE_SVG_FIGURE, IMPORT_FIGURES_FROM_FILE, HANDLE_IMPORTED_PROJECT_FILE } from "./actionTypes";

export const enableAnimation = (flag) => ({
    type: ENABLE_ANIMATION,
    payload: { flag  } 
});

export const changeFigureValueAction = (type,value) => ({
    type: CHANGE_FIGURE_VALUE,
    payload: { type, value }
});

export const handleEditorTabChangeAction = (flag) => ({
    type: HANDLE_EDITOR_TAB_CHANGE,
    payload: { flag }
});

export const changeProjectFigureTabAction = (flag) => ({
    type: CHANGE_PROJECT_FIGURE_TAB,
    payload: { flag }
});
export const addProjectAction = () => ({
    type: ADD_PROJECT,
});
export const deleteProjectAction = (id) => ({
    type: DELETE_PROJECT,
    payload: { id }
});

export const setCurrentProjectAction = (id) => ({
    type: SET_CURRENT_PROJECT,
    payload: { id }
});

export const addFigureAction = () => ({
    type: ADD_FIGURE,
});

export const deleteFigureAction = (id) => ({
    type: DELETE_FIGURE,
    payload: { id }
});

export const showFigureEditorAction = (id) => ({
    type: SHOW_FIGURE_EDITOR,
    payload: {id}
})

export const changeActiveSVGFigureAction = (hrefid) => ({
    type: CHANGE_ACTIVE_SVG_FIGURE,
    payload: {hrefid}
})

export const importFiguresFromFileAction = (importedFiguresList) => ({
    type: IMPORT_FIGURES_FROM_FILE,
    payload: {importedFiguresList}
})

export const handleImportedProjectFileAction = (fileContent) => ({
    type: HANDLE_IMPORTED_PROJECT_FILE,
    payload: {fileContent}
})
