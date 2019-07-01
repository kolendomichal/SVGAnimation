import { FiguresForProjects } from "../static/StartingData";
import { Project } from "../static/Project";
import { Figure } from "../static/Figure";

export type SelectedListState = {
  ifAnimationEditionMode: boolean,
  ifProjectCreationMode: boolean
}

export type FiguresProjectsState = {
  projectList: Project[],
  selectedProject: Project,
  figuresList: Figure[],
  selectedFigure: Figure
}

export interface IUndoableState<T> {
  past: T & [],
  present: T,
  future: T & []
}

export interface InitialState {
  figuresProjects: IUndoableState<FiguresProjectsState>,
  selectedList: SelectedListState

}

export interface IData {
  [key: string]: any;
}

const createInitialFiguresProjectsState = (): FiguresProjectsState => {

  const projectList: Project[] = [...Array(FiguresForProjects.length)].map((value, index) => {
    let project = new Project();
    project.figuresList = FiguresForProjects[index];
    return project;
  });
  projectList[0].name = "Alpha"
  projectList[1].name = "Beta"
  projectList[2].name = "Gamma"
  return {
    projectList: projectList,
    selectedProject: projectList[0],
    figuresList: projectList[0].figuresList,
    selectedFigure: projectList[0].figuresList[0]
  }
}

const createInitialSelectedListState = (): SelectedListState => {
  return { ifProjectCreationMode: true, ifAnimationEditionMode: false }
}

export const initialFiguresProjectsState = createInitialFiguresProjectsState();
export const selectedListState = createInitialSelectedListState();
