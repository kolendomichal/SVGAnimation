import React from 'react'
import Switch from "react-switch";
import { connect } from "react-redux";
import { get } from 'lodash';
import { ENABLE_ANIMATION } from '../../redux/actionTypes';

class ReduxAnimationSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
    }

    handleSwitchChange = (checked) => {
        let flag = checked;
        this.props.enableAnimation(flag);
        console.log(this.props.selectedFigure);
        this.setState({flag});
    }

    render() {
        return (
            <React.Fragment>
                <div className="mt-4">
                    <span className="mr-2 mt-3" >Test</span>
                    <Switch className="ml-2 mt-2" onChange={this.handleSwitchChange} checked={this.state.flag} />
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { selectedFigure } = state.reduxAnimationSwitch;
    return { selectedFigure };
}

const mapDispatchToProps = dispatch => {
    return {
      enableAnimation: (flag) => dispatch({ type: ENABLE_ANIMATION ,payload:{flag: flag}})
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxAnimationSwitch)