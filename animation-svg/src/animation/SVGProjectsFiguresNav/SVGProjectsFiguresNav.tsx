import React from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import "./SVGProjectsFiguresNav.css";
import { Project } from '../static/Project';
import { InitialState } from '../redux/initialState';
import { ChangeProjectFigureTabAction, changeProjectFigureTabAction } from '../redux/reducers/selectedList/actions';

type StateProps = {
    selectedProject: Project,
    ifProjectCreationMode?: boolean,
}

type DispatchProps = {
    handleProjectFigureTabChange: (flag: boolean) => void
}

type Props = StateProps & DispatchProps

class SVGProjectsFiguresNav extends React.PureComponent<Props, {}> {

    private isActiveProjectFigureTab(value: boolean): string {
        return value === this.props.ifProjectCreationMode ? " active" : "";
    }

    render() {
        const { selectedProject, handleProjectFigureTabChange } = this.props;
        return (
            <ul className="svg-editor-nav nav nav-tabs nav-fill" style={{ height: '3vh' }}>
                <li className="nav-item bg-light" onClick={() => handleProjectFigureTabChange(true)}>
                    <button className={"project-figure-nav-item btn btn-outline-secondary  h-100 w-100 " + this.isActiveProjectFigureTab(true)}>Projects</button>
                </li>
                {selectedProject != null
                    ? <li className="nav-item bg-light " onClick={() => handleProjectFigureTabChange(false)}>
                        <button className={"project-figure-nav-item btn btn-outline-secondary .btn-outline-*  h-100 w-100" + this.isActiveProjectFigureTab(false)}>Figures</button>
                    </li>
                    : <li className="nav-item  bg-light" >
                        <button className="btn btn-outline-secondary .btn-outline-* h-100 w-100" disabled>Figures</button>
                    </li>
                }
            </ul>
        );
    }
}
const mapStateToProps = (state: InitialState): StateProps => ({
        selectedProject: state.figuresProjects.present.selectedProject,
        ifProjectCreationMode: state.selectedList.ifProjectCreationMode
});

const mapDispatchToProps = (dispatch: Dispatch<ChangeProjectFigureTabAction>): DispatchProps => {
    return {
        handleProjectFigureTabChange: (flag: boolean) => dispatch(changeProjectFigureTabAction({flag}))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SVGProjectsFiguresNav)
