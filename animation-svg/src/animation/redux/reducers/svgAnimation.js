import { CHANGE_FIGURE_VALUE, UPDATE_PROJECT_STATE, ADD_FIGURE, DELETE_FIGURE, SHOW_FIGURE_EDITOR } from '../actionTypes'
import { initialState } from './initialState';
import { Figure } from "../../static/Figure";

export default function (state = initialState, action) {
    const { projectList, figuresList, selectedFigure, selectedProject } = state;

    switch (action.type) {
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
        case ADD_FIGURE: {
            return {
                ...state,
                figuresList: [...figuresList, new Figure()]
            }
        }
        case DELETE_FIGURE: {
            const { e, id } = action.payload;
            e.stopPropagation();
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
                selectedFigure: isSelectedFigure ? null : selectedFigure
            }
        }
        case SHOW_FIGURE_EDITOR: {
            const { id } = action.payload;
            let selectedFigure = figuresList.find(figure => figure.id === id);
            return {
                ...state,
                selectedFigure: selectedFigure
            }
        }
        default:
            return state;
    };

}