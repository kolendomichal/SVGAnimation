import React, { useRef, useCallback, FunctionComponent } from "react";
import "./ActorName.css"
import { useSelector, useDispatch } from 'react-redux'
import { changeFigureValueAction } from "../../redux/reducers/figuresProjects/actions";
import { InitialState, IData } from "../../redux/initialState";

type Props = {
    valueType: string,
}

const ActorName: FunctionComponent<Props> = (props) => {

    const selectedFigure: IData = useSelector((state: InitialState) => state.figuresProjects.present.selectedFigure);
    const dispatch = useDispatch();
    const changeFigureValue = useCallback((type: string, value: string) => dispatch(changeFigureValueAction({ type, value })), [dispatch]);
    const editName = useRef<HTMLButtonElement>(null);
    const onBlurHandle = () => {
        if (editName && editName.current) {
            changeFigureValue(props.valueType, editName.current.innerHTML);
        }
    }
    
    return (
        <div className="text-center mt-3">
            <button ref={editName} className="h3 actor-project-name"  suppressContentEditableWarning={true} contentEditable={true} onBlur={() => onBlurHandle()}>
            {selectedFigure[props.valueType]}
            </button>
        </div>
    );

}

export default ActorName;