import React from "react";

class ActorName extends React.Component {

    onBlurHandle() {
        this.props.changeSpecifiedValue("name", this.refs.btn.innerHTML);
    }

    buttonStyle = {
        border: 'none',
        fontWeight: 'bold',
        fontSize: '17pt',
        backgroundColor: '#F8F9FA',
        opacity: '100%',
        WebkitTransition: 'all',
        msTransition: 'all'
    };

    render() {
        return (
            <div className="text-center">
                <button ref="btn" style={this.buttonStyle} contentEditable="true" onBlur={() => this.onBlurHandle()} suppressContentEditableWarning={true}>
                    {this.props.value}
                </button>
            </div>
        );
    }

}

export default ActorName;