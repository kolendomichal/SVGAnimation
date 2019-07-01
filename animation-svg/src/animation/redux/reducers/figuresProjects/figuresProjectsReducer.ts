import { IMPORT_FIGURES_FROM_FILE, CHANGE_ACTIVE_SVG_FIGURE, CHANGE_FIGURE_VALUE, ADD_FIGURE, DELETE_FIGURE, SHOW_FIGURE_EDITOR, ADD_PROJECT, DELETE_PROJECT, SET_CURRENT_PROJECT, HANDLE_IMPORTED_PROJECT_FILE, CHANGE_PROJECT_NAME } from './actionTypes'
import { initialFiguresProjectsState, FiguresProjectsState } from '../../initialState';
import { Figure } from "../../../static/Figure";
import { Project } from '../../../static/Project';
import { deleteItemFromArray, compareItems, findItemInArray, updateObject, deepCloneObject } from '../utils';
import undoable, { excludeAction } from 'redux-undo';
import { FiguresProjectsActionTypes, ChangeFigureValueAction, SetCurrentProjectAction, DeleteProjectAction, ShowFigureEditorAction, DeleteFigureAction, ChangeActiveSVGFigureAction, ImportFiguresFromFileAction, HandleImportedProjectFileAction, ChangeProjectNameAction } from './actions';
import { AnyAction } from 'redux';


function handleImportedProjectFile(state: FiguresProjectsState, action: HandleImportedProjectFileAction): FiguresProjectsState {
    const { projectList } = deepCloneObject(state);
    let newProjectList: Project[] = JSON.parse(action.payload.fileContent as string).concat(projectList);
    return {
        ...state,
        projectList: newProjectList
    }
}

function importFiguresFromFile(state: FiguresProjectsState, action: ImportFiguresFromFileAction) {
    const { importedFiguresList } = action.payload;
    const { projectList, selectedProject } = updateProjectState(state, importedFiguresList);
    return updateObject(state, { projectList: projectList, selectedProject, figuresList: importedFiguresList })
}

function changeActiveSVGFigure(state: FiguresProjectsState, action: ChangeActiveSVGFigureAction) {
    const { hrefid } = action.payload;
    const { figuresList } = deepCloneObject(state);
    let selectedFigure = findItemInArray(figuresList, "hrefid", hrefid);
    return updateObject(state, { selectedFigure: selectedFigure })
}

function addFigure(state: FiguresProjectsState) {
    return {
        ...state,
        figuresList: [
            ...state.figuresList,
            new Figure()
        ]
    }
}

function deleteFigure(state: FiguresProjectsState, action: DeleteFigureAction) {
    const { id } = action.payload;
    const { selectedFigure } = deepCloneObject(state);
    let figuresList = deleteItemFromArray(state.figuresList, id);
    let isSelectedFigure = compareItems(selectedFigure, id);
    const { projectList, selectedProject } = updateProjectState(state, figuresList);
    return updateObject(state, {
        figuresList: figuresList,
        selectedFigure: isSelectedFigure ? null : selectedFigure,
        projectList: projectList,
        selectedProject: selectedProject
    })
}

function showFigureEditor(state: FiguresProjectsState, action: ShowFigureEditorAction) {
    let selectedFigure = findItemInArray(state.figuresList, "id", action.payload.id);
    return updateObject(state, { selectedFigure: selectedFigure })
}

function addProject(state: FiguresProjectsState) {
    return {
        ...state,
        projectList: [
            ...state.projectList,
            new Project()
        ]
    }
}

function deleteProject(state: FiguresProjectsState, action: DeleteProjectAction) {
    const { id } = action.payload;
    const { selectedProject, figuresList, selectedFigure } = deepCloneObject(state);
    let projectList = deleteItemFromArray(state.projectList, id);
    let isSelectedProject = compareItems(selectedProject, id);
    return updateObject(state, {
        projectList: projectList,
        selectedProject: isSelectedProject ? null : selectedProject,
        figuresList: isSelectedProject ? [] : figuresList,
        selectedFigure: isSelectedProject ? null : selectedFigure,
    })
}

function setCurrentProject(state: FiguresProjectsState, action: SetCurrentProjectAction) {
    let selectedProject: Project | undefined = findItemInArray(state.projectList, "id", action.payload.id);

    return selectedProject !== undefined ?
        updateObject(state, {
            selectedProject: selectedProject,
            figuresList: selectedProject.figuresList,
            selectedFigure: null
        })
        : state;
}

type ProjectState = {
    projectList: Project[],
    selectedProject: Project
}

function updateProjectState(state: FiguresProjectsState, figuresList: Figure[]): ProjectState {
    const { projectList, selectedProject } = deepCloneObject(state);
    let projectToUpdateIndex: number = projectList.findIndex(project => project.id === selectedProject.id);
    projectList[projectToUpdateIndex].figuresList = figuresList;
    selectedProject.figuresList = figuresList;
    return { projectList, selectedProject }
}

function changeFigureValue(state: FiguresProjectsState, action: ChangeFigureValueAction) {
    const { type, value } = action.payload;
    const { selectedFigure, figuresList } = deepCloneObject(state);
    switch (type) {
        case "name": {
            selectedFigure.name = value as string;
            break;
        }
        case "figureType": {
            selectedFigure.figureType = value as string;
            if (value === 'Square') selectedFigure.numOfSides = 4;
            break;
        }
        case "size": {
            selectedFigure.size = value as number;
            break;
        }
        case "xPosition": {
            selectedFigure.xPosition = value as number;
            break;
        }
        case "yPosition": {
            selectedFigure.yPosition = value as number;
            break;
        }
        case "numOfSides": {
            selectedFigure.numOfSides = value as number;
            break;
        }
        case "opacity": {
            selectedFigure.opacity = value as number;
            break;
        }
        case "fill": {
            selectedFigure.fill = value as string;
            break;
        }
        case "stroke": {
            selectedFigure.stroke = value as string;
            break;
        }
        case "strokeWidth": {
            selectedFigure.strokeWidth = value as number;
            break;
        }
        case "animation.attributeName": {
            selectedFigure.animation.attributeName = value as string;
            break;
        }
        case "animation.from": {
            selectedFigure.animation.from = value as number;
            break;
        }
        case "animation.to": {
            selectedFigure.animation.to = value as number;
            break;
        }
        case "animation.dur": {
            selectedFigure.animation.dur = value as number;
            break;
        }
        case "animation.r": {
            selectedFigure.animation.r = value as number;
            break;
        }
        case "animationEnabled": {
            selectedFigure.animationEnabled = value as boolean;
            break;
        }
        default: {
            break;
        }
    }

    figuresList[figuresList.findIndex(figure => figure.id === selectedFigure.id)] = selectedFigure;
    const { projectList, selectedProject } = updateProjectState(state, figuresList);

    return updateObject(
        state, {
            figuresList: figuresList,
            projectList: projectList,
            selectedFigure: selectedFigure,
            selectedProject: selectedProject
        });
}

function ChangeProjectName(state: FiguresProjectsState, action: ChangeProjectNameAction) {
    const { projectList, selectedProject } = deepCloneObject(state);
    selectedProject.name = action.payload.name;
    projectList[projectList.findIndex(project => project.id === selectedProject.id)] = selectedProject;
    return updateObject(state, { projectList: projectList, selectedProject: selectedProject })
}

const figuresProjects = (state: FiguresProjectsState = initialFiguresProjectsState, action: FiguresProjectsActionTypes | AnyAction): FiguresProjectsState => {

    switch (action.type) {
        case HANDLE_IMPORTED_PROJECT_FILE:
            return handleImportedProjectFile(state, action as HandleImportedProjectFileAction);
        case IMPORT_FIGURES_FROM_FILE:
            return importFiguresFromFile(state, action as ImportFiguresFromFileAction);
        case CHANGE_ACTIVE_SVG_FIGURE:
            return changeActiveSVGFigure(state, action as ChangeActiveSVGFigureAction)
        case ADD_FIGURE: {
            return addFigure(state);
        }
        case DELETE_FIGURE: {
            return deleteFigure(state, action as DeleteFigureAction);
        }
        case SHOW_FIGURE_EDITOR: {
            return showFigureEditor(state, action as ShowFigureEditorAction)
        }
        case ADD_PROJECT: {
            return addProject(state);
        }
        case DELETE_PROJECT: {
            return deleteProject(state, action as DeleteProjectAction);
        }
        case SET_CURRENT_PROJECT: {
            return setCurrentProject(state, action as SetCurrentProjectAction);
        }
        case CHANGE_FIGURE_VALUE: {
            return changeFigureValue(state, action as ChangeFigureValueAction);
        }
        case CHANGE_PROJECT_NAME: {
            return ChangeProjectName(state, action as ChangeProjectNameAction);
        }
        default:
            return state;
    };
}

const undoableFiguresProjects = undoable(figuresProjects, {
    filter: excludeAction([SET_CURRENT_PROJECT, SHOW_FIGURE_EDITOR, CHANGE_ACTIVE_SVG_FIGURE])
});

export default undoableFiguresProjects;