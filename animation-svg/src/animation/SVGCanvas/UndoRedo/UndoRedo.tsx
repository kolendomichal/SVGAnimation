import * as React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { InitialState } from '../../redux/initialState';


type IconProps = {
    canClick: boolean
}
const Icon = styled.div`
    cursor: ${(props: IconProps) => props.canClick ? "pointer" : "no-drop"};
    margin: 10px;
    display: inline-block
`;

type StateProps = {
    canUndo: boolean,
    canRedo: boolean
}

type DispatchProps = {
    onUndo: () => void,
    onRedo: () => void
}
type Props = DispatchProps & StateProps

class UndoRedo extends React.PureComponent<Props> {

    handleKeyPress = (event: any) => {
        const { canUndo, canRedo, onUndo, onRedo } = this.props;
        if (canUndo && event.ctrlKey && event.key === 'z') {
            onUndo();
        } else if (canRedo && event.ctrlKey && event.shiftKey && event.key === 'z') {
            onRedo();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }

    render() {
        const { canUndo, canRedo, onUndo, onRedo } = this.props;
        return (
            <div>
                <Icon canClick={canUndo} onClick={() => canUndo ? onUndo() : null}>
                    <FontAwesomeIcon icon={faUndo} size="2x" />
                </Icon>
                <Icon canClick={canRedo} onClick={() => canRedo ? onRedo() : null}>
                    <FontAwesomeIcon icon={faRedo} size="2x" />
                </Icon>
            </div>
        )
    }
}


const mapStateToProps = (state: InitialState): StateProps => {
    return {
        canUndo: state.figuresProjects.past.length > 0,
        canRedo: state.figuresProjects.future.length > 0,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo())
    }
}

export default connect<StateProps, DispatchProps, {}, InitialState>(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo)
