import React from 'react';
import "./SVGProjectsFiguresNav.css";

function SVGProjectsFiguresNav(props) {

    return (
        <ul className="svg-editor-nav nav nav-tabs nav-fill ">
            <li className="nav-item bg-light" onClick={() => props.handleProjectFigureTabChange(true)}>
                <button className={"project-figure-nav-item btn btn-outline-secondary  h-100 w-100 " + props.isActiveProjectFigureTab(true)}>Projects</button>
            </li>
            <li className=" nav-item" onClick={() => props.handleProjectFigureTabChange(false)}>
                <button className={"project-figure-nav-item btn btn-outline-secondary .btn-outline-* w-100  " + props.isActiveProjectFigureTab(false)}>Figures</button>
            </li>
        </ul>
    );
}

export default SVGProjectsFiguresNav;