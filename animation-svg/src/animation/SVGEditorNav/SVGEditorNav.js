import React from 'react'
import "./SVGEditorNav.css"

function SVGEditorNav(props) {

    return (
        <ul className="svg-editor-nav nav nav-tabs nav-fill ">
            <li className="svg-editor-nav-item nav-item" onClick={() => props.handleEditorTabChange(false)}>
                <button className={"nav-link btn btn-link .btn-outline-* w-100  " + props.isActiveEditor(false)}>Properties</button>
            </li>
            <li className="svg-editor-nav-item nav-item" onClick={() => props.handleEditorTabChange(true)}>
                <button className={"nav-link btn btn-link .btn-outline-* w-100  " + props.isActiveEditor(true)}>Animations</button>
            </li>
        </ul>
    )
}

export default SVGEditorNav;