import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function SVGProjectsList(props) {

    return (
        <React.Fragment>
            <div className="bg-secondary text-white">
                <span className="figures-header text-left pl-2">Projects</span>
                <span className="mt-4 mr-4 float-right" onClick={() => props.addProject()}>
                    <FontAwesomeIcon className="add-figure" icon={faPlus} size="2x" />
                </span>
            </div>
            <ul id="figures-list" className="list-group bg-light text-left">
                {props.renderProjectsList()}
            </ul>
        </React.Fragment>
    );
}

export default SVGProjectsList;