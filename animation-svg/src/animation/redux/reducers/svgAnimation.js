import { IMPORT_FIGURES_FROM_FILE, CHANGE_ACTIVE_SVG_FIGURE, CHANGE_FIGURE_VALUE, HANDLE_EDITOR_TAB_CHANGE, ADD_FIGURE, DELETE_FIGURE, SHOW_FIGURE_EDITOR, CHANGE_PROJECT_FIGURE_TAB, ADD_PROJECT, DELETE_PROJECT, SET_CURRENT_PROJECT, HANDLE_IMPORTED_PROJECT_FILE } from '../actionTypes'
import { initialState } from './initialState';
import { Figure } from "../../static/Figure";
import { Project } from '../../static/Project';

export default function (state = initialState, action) {
    const { projectList, figuresList, selectedFigure, selectedProject } = state;

    switch (action.type) {
        case HANDLE_IMPORTED_PROJECT_FILE:
            const { fileContent } = action.payload
            return {
                ...state,
                projectList: projectList.concat(JSON.parse(fileContent))
            }
        case IMPORT_FIGURES_FROM_FILE:
            const { importedFiguresList } = action.payload;
            let projectToUpdateIndex = projectList.findIndex(project => project.id === selectedProject.id);
            projectList[projectToUpdateIndex].figuresList = importedFiguresList;
            selectedProject.figuresList = importedFiguresList;

            return {
                ...state,
                figuresList: importedFiguresList,
                projectList: [...projectList],
                selectedProject: selectedProject

            }
        case CHANGE_ACTIVE_SVG_FIGURE:
            const { hrefid } = action.payload;
            let svgSelectedFigure = hrefid.startsWith("figure") ? figuresList.find(figure => figure.hrefid === hrefid) : selectedFigure;
            return {
                ...state,
                selectedFigure: svgSelectedFigure
            }
        case ADD_FIGURE: {
            return {
                ...state,
                figuresList: [...figuresList, new Figure()]
            }
        }
        case DELETE_FIGURE: {
            const { id } = action.payload;
            let figureToDeleteIndex = figuresList.findIndex(figure => figure.id === id);
            figuresList.splice(figureToDeleteIndex, 1);
            let isSelectedFigure = selectedFigure !== null
                ? selectedFigure.id === id
                : false;

            //UpdateProjectState
            let projectToUpdateIndex = projectList.findIndex(project => project.id === selectedProject.id);
            projectList[projectToUpdateIndex].figuresList = figuresList;
            selectedProject.figuresList = figuresList;

            return {
                ...state,
                figuresList: [...figuresList],
                selectedFigure: isSelectedFigure ? null : selectedFigure,
                projectList: [...projectList],
                selectedProject: selectedProject
            }
        }
        case SHOW_FIGURE_EDITOR: {
            const { id } = action.payload;
            let selectedFigure = figuresList.find(figure => figure.id === id);
            return {
                ...state,
                selectedFigure
            }
        }
        case ADD_PROJECT: {
            return {
                ...state,
                projectList: [...projectList, new Project()]
            }
        }
        case DELETE_PROJECT: {
            const { id } = action.payload;
            let projectToDeleteIndex = projectList.findIndex(figure => figure.id === id);
            projectList.splice(projectToDeleteIndex, 1);
            let isSelectedProject = selectedProject !== null
                ? selectedProject.id === id
                : false;

            return {
                ...state,
                projectList: [...projectList],
                selectedProject: isSelectedProject ? null : selectedProject,
                figuresList: isSelectedProject ? [] : figuresList,
                selectedFigure: isSelectedProject ? null : selectedFigure
            }
        }
        case CHANGE_PROJECT_FIGURE_TAB: {
            const { flag } = action.payload;
            return {
                ...state,
                ifProjectCreationMode: flag
            }
        }
        case SET_CURRENT_PROJECT: {
            const { id } = action.payload;
            let selectedProject = projectList.find(project => project.id === id);
            return {
                ...state,
                selectedProject: selectedProject,
                figuresList: selectedProject.figuresList,
                selectedFigure: null
            }
        }
        case HANDLE_EDITOR_TAB_CHANGE: {
            const { flag } = action.payload;
            return {
                ...state,
                ifAnimationEditionMode: flag
            }
        }
        case CHANGE_FIGURE_VALUE: {
            const { type, value } = action.payload;
            let selectedFigureIndex = figuresList.findIndex(figure => figure.id === selectedFigure.id);
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
                case "projectName": {
                    selectedProject.name = value;
                    break;
                }
                default: {
                    break;
                }
            }
            figuresList[selectedFigureIndex] = selectedFigure;
            //UpdateProjectState
            let projectToUpdateIndex = projectList.findIndex(project => project.id === selectedProject.id);
            projectList[projectToUpdateIndex].figuresList = figuresList;
            selectedProject.figuresList = figuresList;
            return {
                ...state,
                figuresList: [...figuresList],
                projectList: [...projectList],
                selectedFigure: selectedFigure,
                selectedProject: selectedProject
            }
        }
        default:
            return state;
    };

}