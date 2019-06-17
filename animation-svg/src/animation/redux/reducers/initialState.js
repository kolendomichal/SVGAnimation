import { FiguresForProjects } from "../../static/StartingData";
import { Project } from "../../static/Project";

function createInitialState(){
  const projectList = [...Array(FiguresForProjects.length)].map((value, index) => {
    let project = new Project();
    project.figuresList = FiguresForProjects[index];
    return project;
  });
  return {
      projectList: projectList,
      selectedProject: projectList[0],
      figuresList: projectList[0].figuresList,
      selectedFigure: projectList[0].figuresList[0],
      ifAnimationEditionMode: false,
      ifProjectCreationMode: true,
  }
}

export  const initialState = createInitialState();
