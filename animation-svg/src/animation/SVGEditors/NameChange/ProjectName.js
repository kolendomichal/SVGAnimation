import React, { useCallback,useRef  } from "react";
import "./ActorName.css"
import { useSelector,useDispatch } from 'react-redux'
import { changeFigureValueAction } from "../../redux/actions";

const ProjectName = () => {

    const selectedProject = useSelector(state => state.figuresProjects.present.selectedProject);
    const dispatch = useDispatch();
    const editName = useRef(null);
    const changeFigureValue = useCallback((type,value) => dispatch(changeFigureValueAction(type,value)),[dispatch]);
    const onBlurHandle = () => changeFigureValue("projectName", editName.current.innerHTML);

    return (
        <div className="text-center mt-3">
            <button ref={editName} className="h1 actor-project-name" contentEditable="true" onBlur={() => onBlurHandle()} suppressContentEditableWarning={true}>
                {selectedProject["name"]}
            </button>
        </div>
    );

}

export default ProjectName;