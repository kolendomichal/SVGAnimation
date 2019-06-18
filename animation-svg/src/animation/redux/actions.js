import { ENABLE_ANIMATION,CHANGE_FIGURE_VALUE,HANDLE_EDITOR_TAB_CHANGE, CHANGE_PROJECT_FIGURE_TAB, ADD_PROJECT, DELETE_PROJECT, SET_CURRENT_PROJECT } from "./actionTypes";

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
export const deleteProjectAction = (e,id) => ({
    type: DELETE_PROJECT,
    payload: { e, id }
});

export const setCurrentProjectAction = (id) => ({
    type: SET_CURRENT_PROJECT,
    payload: { id }
});

