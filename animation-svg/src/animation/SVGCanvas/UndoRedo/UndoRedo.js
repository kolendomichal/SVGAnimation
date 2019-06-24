import * as React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"
import { ActionCreators as UndoActionCreators } from 'redux-undo'


const Icon = styled.div`
    cursor: ${props => props.canClick ? "pointer" : "no-drop"};
    margin: 10px;
    display: inline-block
`;

class UndoRedo extends React.PureComponent {
    
    handleKeyPress = (event) => {
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


const mapStateToProps = (state) => {
    return {
        canUndo: state.figuresProjects.past.length > 0,
        canRedo: state.figuresProjects.future.length > 0,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo)
