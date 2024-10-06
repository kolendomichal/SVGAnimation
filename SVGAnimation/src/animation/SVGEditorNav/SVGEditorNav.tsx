import React from 'react'
import "./SVGEditorNav.css"
import { connect } from "react-redux";
import { InitialState } from '../redux/initialState';
import { Dispatch } from 'redux';
import { HandleEditorTabChangeAction, handleEditorTabChangeAction } from '../redux/reducers/selectedList/actions';


type StateProps = {
    ifAnimationEditionMode: boolean
}

type DispatchProps = {
    handleEditorTabChange: (flag: boolean) => void
}

type Props = StateProps & DispatchProps

class SVGEditorNav extends React.PureComponent<Props, {}> {

    isActiveEditor = (value: boolean): string => {
        return value === this.props.ifAnimationEditionMode ? "active" : "";
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
const mapStateToProps = (state: InitialState): StateProps => ({
    ifAnimationEditionMode: state.selectedList.ifAnimationEditionMode
});

const mapDispatchToProps = (dispatch: Dispatch<HandleEditorTabChangeAction>) => {
    return {
        handleEditorTabChange: (flag: boolean) => dispatch(handleEditorTabChangeAction({flag})),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SVGEditorNav)
