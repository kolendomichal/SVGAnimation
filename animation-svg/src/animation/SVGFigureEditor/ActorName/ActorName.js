import React from "react";
import "./ActorName.css"
class ActorName extends React.Component {

    onBlurHandle() {
        this.props.changeSpecifiedValue("name", this.refs.btn.innerHTML);
    }


    render() {
        return (
            <div className="text-center">
                <button ref="btn" className="actor-name"  contentEditable="true" onBlur={() => this.onBlurHandle()} suppressContentEditableWarning={true}>
                    {this.props.value}
                </button>
            </div>
        );
    }

}

export default ActorName;