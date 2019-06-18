import React from 'react'
import "./SVGEditorNav.css"
import { handleEditorTabChangeAction } from '../redux/actions';
import { connect } from "react-redux";

class SVGEditorNav extends React.PureComponent {
    
    isActiveEditor = (value) => {
        return value === this.props.ifAnimationEditionMode ? " active" : ""
    }

    render() {
        const { handleEditorTabChange } = this.props;
        return (
            <ul className="svg-editor-nav nav nav-tabs nav-fill ">
                <li className="svg-editor-nav-item nav-item " onClick={() => handleEditorTabChange(false)}>
                    <button className={" border-left-0 nav-link btn btn-link .btn-outline-* w-100  " + this.isActiveEditor(false)}>Properties</button>
                </li>
                <li className="svg-editor-nav-item nav-item" onClick={() => handleEditorTabChange(true)}>
                    <button className={" border-right-0 nav-link btn btn-link .btn-outline-* w-100  " + this.isActiveEditor(true)}>Animations</button>
                </li>
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    const { ifAnimationEditionMode } = state.svgAnimation;
    return { ifAnimationEditionMode };
}

const mapDispatchToProps = dispatch => {
    return {
        handleEditorTabChange: (flag) => dispatch(handleEditorTabChangeAction(flag)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SVGEditorNav)
