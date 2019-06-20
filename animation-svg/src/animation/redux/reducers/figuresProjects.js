import { IMPORT_FIGURES_FROM_FILE, CHANGE_ACTIVE_SVG_FIGURE, CHANGE_FIGURE_VALUE, ADD_FIGURE, DELETE_FIGURE, SHOW_FIGURE_EDITOR, ADD_PROJECT, DELETE_PROJECT, SET_CURRENT_PROJECT, HANDLE_IMPORTED_PROJECT_FILE } from '../actionTypes'
import { initialFiguresProjectsState } from '../initialState';
import { Figure } from "../../static/Figure";
import { Project } from '../../static/Project';
import { deleteItemFromArray, compareItems, findItemInArray, updateObject } from './utils';

function updateProjectState(state, figuresList) {
    const { projectList, selectedProject } = state;
    let projectToUpdateIndex = projectList.findIndex(project => project.id === selectedProject.id);
    projectList[projectToUpdateIndex].figuresList = figuresList;
    selectedProject.figuresList = figuresList;
    return { projectList, selectedProject }
}

function deleteFigure(state, action) {
    const { id } = action.payload;
    const { figuresList, selectedFigure } = state;
    deleteItemFromArray(figuresList, id);
    let isSelectedFigure = compareItems(selectedFigure, id);
    const { projectList, selectedProject } = updateProjectState(state, figuresList);
    return updateObject(state, {
        figuresList: [...figuresList],
        selectedFigure: isSelectedFigure ? null : selectedFigure,
        projectList: [...projectList],
        selectedProject: selectedProject
    })
}

function importFiguresFromFile(state, action) {
    const { importedFiguresList } = action.payload;
    const { projectList, selectedProject } = updateProjectState(state, importedFiguresList);
    return updateObject(state, { projectList: [...projectList], selectedProject, figuresList: [...importedFiguresList] })
}
function changeActiveSVGFigure(state, action) {
    const { hrefid } = action.payload;
    let svgSelectedFigure = hrefid.startsWith("figure") ? state.figuresList.find(figure => figure.hrefid === hrefid) : state.selectedFigure;
    return updateObject(state, { selectedFigure: svgSelectedFigure })
}
function showFigureEditor(state, action) {
    let selectedFigure = findItemInArray(state.figuresList, action.payload.id);
    return updateObject(state, selectedFigure)
}
function deleteProject(state, action) {
    const { id } = action.payload;
    const { projectList, selectedProject} = state;
    deleteItemFromArray(projectList, id);
    let isSelectedProject = compareItems(selectedProject, id);
    return updateObject(state, {
        projectList: [...projectList],
        selectedProject: isSelectedProject && null,
        figuresList: isSelectedProject && [],
        selectedFigure: isSelectedProject && null,
    })
}
function setCurrentProject(state, action) {
    let selectedProject = findItemInArray(state.projectList, action.payload.id);
    return updateObject(state, {
        selectedProject: selectedProject,
        figuresList: selectedProject.figuresList,
        selectedFigure: null
    })
}
function changeFigureValue(state, action) {
    const { type, value } = action.payload;
    const { selectedFigure, figuresList } = state;
    switch (type) {
        case "name": {
            selectedFigure.name = value;
            break;
        }
        case "figureType": {
            selectedFigure.figureType = value;
            if (value === 'Square') selectedFigure.numOfSides = 4;
            break;
        }
        case "size": {
            selectedFigure.size = value;
            break;
        }
        case "xPosition": {
            selectedFigure.xPosition = value;
            break;
        }
        case "yPosition": {
            selectedFigure.yPosition = value;
            break;
        }
        case "numOfSides": {
            selectedFigure.numOfSides = value;
            break;
        }
        case "opacity": {
            selectedFigure.opacity = value;
            break;
        }
        case "fill": {
            selectedFigure.fill = value;
            break;
        }
        case "stroke": {
            selectedFigure.stroke = value;
            break;
        }
        case "strokeWidth": {
            selectedFigure.strokeWidth = value;
            break;
        }
        case "animation.attributeName": {
            selectedFigure.animation.attributeName = value;
            break;
        }
        case "animation.from": {
            selectedFigure.animation.from = value;
            break;
        }
        case "animation.to": {
            selectedFigure.animation.to = value;
            break;
        }
        case "animation.dur": {
            selectedFigure.animation.dur = value;
            break;
        }
        case "animation.r": {
            selectedFigure.animation.r = value;
            break;
        }
        case "animationEnabled": {
            selectedFigure.animationEnabled = value;
            break;
        }
        default: {
            break;
        }
    }
    figuresList[figuresList.findIndex(fig => fig.id === selectedFigure.id)] = selectedFigure;
    const { projectList, selectedProject } = updateProjectState(state, figuresList);
    return {
        ...state,
        figuresList: [...figuresList],
        projectList: [...projectList],
        selectedFigure: selectedFigure,
        selectedProject: selectedProject
    }
}

export default function (state = initialFiguresProjectsState, action) {
    const { projectList, figuresList } = state;

    switch (action.type) {
        case HANDLE_IMPORTED_PROJECT_FILE:
            return updateObject(state, { projectList: projectList.concat(JSON.parse(action.payload.fileContent)) })
        case IMPORT_FIGURES_FROM_FILE:
            return importFiguresFromFile(state, action);
        case CHANGE_ACTIVE_SVG_FIGURE:
            return changeActiveSVGFigure(state, action)
        case ADD_FIGURE: {
            return updateObject(state, { figuresList: [...figuresList, new Figure()] })
        }
        case DELETE_FIGURE: {
            return deleteFigure(state, action);
        }
        case SHOW_FIGURE_EDITOR: {
            return showFigureEditor(state, action)
        }
        case ADD_PROJECT: {
            return updateObject(state, { projectList: [...projectList, new Project()] })
        }
        case DELETE_PROJECT: {
            return deleteProject(state, action);
        }
        case SET_CURRENT_PROJECT: {
            return setCurrentProject(state, action);
        }
        case CHANGE_FIGURE_VALUE: {
            return changeFigureValue(state, action);
        }
        default:
            return state;
    };

}