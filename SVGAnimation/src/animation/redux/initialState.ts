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

export function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
const colorArray = [
  '#FF6900',
  '#FCB900',
  '#7BDCB5',
  '#00D084',
  '#8ED1FC',
  '#0693E3',
  '#ABB8C3',
  '#EB144C',
  '#F78DA7',
  '#9900EF',
]
export const createNewFigure = (): Figure => {
  var figure = new Figure();
  figure.fill = { hex: colorArray[Number(randomBetween(0, colorArray.length - 1).toFixed())] };
  figure.strokeWidth = Number(randomBetween(0, 50).toFixed());
  figure.stroke = { hex: colorArray[Number(randomBetween(0, colorArray.length - 1).toFixed())] };
  figure.xPosition = Number(randomBetween(0, 500).toFixed());
  figure.yPosition = Number(randomBetween(0, 500).toFixed());
  return figure;
}

export const initialFiguresProjectsState = createInitialFiguresProjectsState();
export const selectedListState = createInitialSelectedListState();
