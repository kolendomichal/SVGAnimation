import React from 'react';
import { connect } from "react-redux";
import "./SVGProjectsFiguresNav.css";
import { changeProjectFigureTabAction } from '../redux/actions';

class SVGProjectsFiguresNav extends React.PureComponent {

    isActiveProjectFigureTab(value) {
        return value === this.props.ifProjectCreationMode ? " active" : "";
    }

    render() {
        const { selectedProject, handleProjectFigureTabChange } = this.props;
        return (
            <ul className="svg-editor-nav nav nav-tabs nav-fill ">
                <li className="nav-item bg-light" onClick={() => handleProjectFigureTabChange(true)}>
                    <button className={"project-figure-nav-item btn btn-outline-secondary  h-100 w-100 " + this.isActiveProjectFigureTab(true)}>Projects</button>
                </li>
                {selectedProject != null
                    ? <li className=" nav-item" onClick={() => handleProjectFigureTabChange(false)}>
                        <button className={"project-figure-nav-item btn btn-outline-secondary .btn-outline-* w-100  " + this.isActiveProjectFigureTab(false)}>Figures</button>
                    </li>
                    : <li className=" nav-item" >
                        <button className={"btn btn-outline-secondary .btn-outline-* w-100 "} disabled>Figures</button>
                    </li>
                }
            </ul>
        );
    }
}
const mapStateToProps = (state) => {
    const { selectedProject, ifProjectCreationMode } = state.svgAnimation;
    return { selectedProject, ifProjectCreationMode };
}

const mapDispatchToProps = dispatch => {
    return {
        handleProjectFigureTabChange: (flag) => dispatch(changeProjectFigureTabAction(flag)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SVGProjectsFiguresNav)
