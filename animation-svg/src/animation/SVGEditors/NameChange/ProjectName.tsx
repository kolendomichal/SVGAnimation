import React, { useCallback, useRef, FunctionComponent } from "react";
import "./ActorName.css"
import { useSelector, useDispatch } from 'react-redux'
import { changeProjectNameAction } from "../../redux/reducers/figuresProjects/actions";
import { InitialState } from "../../redux/initialState";


const ProjectName: FunctionComponent = () => {

    const selectedProject = useSelector((state: InitialState) => state.figuresProjects.present.selectedProject);
    const dispatch = useDispatch();
    const editName = useRef<HTMLButtonElement>(null);
    const changeProjectName = useCallback((name: string) => dispatch(changeProjectNameAction({ name })), [dispatch]);

    const onBlurHandle = () => {
        if (editName && editName.current) {
            changeProjectName(editName.current.innerHTML);
        }
    }

    return (
        <div className="text-center mt-3">
            <button ref={editName} className="h1 actor-project-name" suppressContentEditableWarning={true} contentEditable={true} onBlur={() => onBlurHandle()}>
                {selectedProject["name"]}
            </button>
        </div>
    );

}

export default ProjectName;