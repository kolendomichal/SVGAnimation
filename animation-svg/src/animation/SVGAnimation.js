import React from "react";
import "./SVGAnimation.css";
import SVGFiguresList from "./SVGFiguresList/SVGFiguresList";
import SVGFigureEditor from "./SVGEditors/SVGFigureEditor/SVGFigureEditor";
import SVGAnimationEditor from "./SVGEditors/SVGAnimationEditor/SVGAnimationEditor";
import SVGCanvas from "./SVGCanvas/SVGCanvas";
import { Figure } from "./static/Figure";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import SVGEditorNav from "./SVGEditorNav/SVGEditorNav";



//IMPORTANT TODO
//All animations have to handled by javascript code inside svg
//when exporting svg, we only get the html code for it.

//TODO use SVG inline instead of fontawesome
class SVGAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFigure: null,
      figures: [],
      figuresLength: 0,
      delete: true,
      ifAnimationEditionMode: false,
      svgDimensions: [500,500]
    };
  }

  componentDidMount() {
    //Dont know better solution
    const figures = [new Figure(), new Figure(), new Figure()];
    figures[0].id = 1;
    figures[0].fill.hex = '#EB144C' // czerwony
    figures[1].id = 2;
    figures[1].fill.hex = '#FCB900' //żólty
    figures[1].xPosition = 200;
    figures[2].id = 3;
    figures[2].fill.hex = '#00D084'
    figures[2].xPosition = 350;
    this.setState({ figures, selectedFigure: figures[0], figuresLength: figures.length });
    console.log("SVGAnimation Mounted");
  }

  addFigure = () => {
    let figure = new Figure();
    let figuresLength = this.state.figuresLength + 1;
    figure.id = figuresLength;
    this.setState(prevState => ({
      figures: [...prevState.figures, figure],
      figuresLength: figuresLength
    }));
  }

  deleteFigure = (e, id) => {
    e.stopPropagation(); //clicking on list item triggered showActorEditor
    let figures = [...this.state.figures];
    let figureToDeleteIndex = figures.findIndex(figure => figure.id === id);
    figures.splice(figureToDeleteIndex, 1);
    let isSelectedFigure = this.state.selectedFigure !== null
      ? this.state.selectedFigure.id === id
      : false;

    isSelectedFigure
      ? this.setState({ figures, selectedFigure: null })
      : this.setState({ figures });
  }

  isActiveFigure = (id) => {
    let selectedFigureId = this.state.selectedFigure !== null ? this.state.selectedFigure.id : -1;
    let isActive = selectedFigureId === id;
    return isActive ? 'active-figure' : '';
  }

  showFigureEditor = (id) => {
    let selectedFigure = this.state.figures.find(figure => figure.id === id);
    this.setState({ selectedFigure });
  }

  renderFiguresList = () => {
    return this.state.figures.map((item, key) => {
      return (
        <li
          key={item.id + item.name}
          className={'list-group-item list-figure ' + this.isActiveFigure(item.id)}
          onClick={() => this.showFigureEditor(item.id)}>
          {item.name}
          <FontAwesomeIcon
            onClick={(e) => this.deleteFigure(e, item.id)}
            className="delete-figure"
            icon={faTrash}
            size="1x" />
        </li>
      );
    });
  }

  changeSelectedFigure = (figure) => {
    this.setState({selectedFigure: figure})
  }

  changeFigureValue = (type, value) => {
    let figures = [...this.state.figures];
    let selectedFigure = this.state.selectedFigure;
    let selectedFigureIndex = figures.findIndex(figure => figure.id === selectedFigure.id);
    switch (type) {
      case "name": {
        selectedFigure.name = value;
        break;
      }
      case "figureType": {
        selectedFigure.figureType = value;
        break;
      }
      case "size": {
        selectedFigure.size = value;
        break;
      }
      case "xPosition": {
        selectedFigure.xPosition = value;
        break;
      }
      case "yPosition": {
        selectedFigure.yPosition = value;
        break;
      }
      case "numOfSides": {
        selectedFigure.numOfSides = value;
        break;
      }
      case "opacity": {
        selectedFigure.opacity = value;
        break;
      }
      case "fill": {
        selectedFigure.fill = value;
        break;
      }
      case "stroke": {
        selectedFigure.stroke = value;
        break;
      }
      case "strokeWidth": {
        selectedFigure.strokeWidth = value;
        break;
      }
      case "attributeName": {
        selectedFigure.animation.attributeName = value;
        break;
      }
      case "from": {
        selectedFigure.animation.from = value;
        break;
      }
      case "to": {
        selectedFigure.animation.to = value;
        break;
      }
      case "dur": {
        selectedFigure.animation.dur = value + "s";
        break;
      }
      default: {
        break;
      }
    }
    figures[selectedFigureIndex] = selectedFigure;
    this.setState({ figures, selectedFigure });
  }

  isActiveEditor = (value) => {
    return value === this.state.ifAnimationEditionMode ? " active" : ""
  }

  handleEditorTabChange = (value) => {
    this.setState({ ifAnimationEditionMode: value });
  }

  render() {
    console.log("SVGAnimation rendered");
    return (
      <div className="container-fluid h-100 bg-white">
        <div className="row h-100">
          <div className="col-lg-3 p-0  overflow-auto">
            <SVGFiguresList
              addFigure={this.addFigure}
              renderFiguresList={this.renderFiguresList} />
          </div>
          <div className="col-lg-4 h-100 bg-light overflow-auto">
            <SVGEditorNav
              handleEditorTabChange={this.handleEditorTabChange}
              isActiveEditor={this.isActiveEditor}
            />
            {this.state.ifAnimationEditionMode
              ? <SVGAnimationEditor
                changeFigureValue={this.changeFigureValue}
                selectedFigure={this.state.selectedFigure} 
                svgDimensions={this.state.svgDimensions}/>
              : <SVGFigureEditor
                changeFigureValue={this.changeFigureValue}
                selectedFigure={this.state.selectedFigure} />

            }
          </div>
          <div className="col-lg-5 p-0 h-100" >
            <SVGCanvas figures={this.state.figures} svgDimensions={this.state.svgDimensions} changeSelectedFigure={this.changeSelectedFigure}/>
          </div>

        </div>
      </div>
    );
  }
}

export default SVGAnimation;
