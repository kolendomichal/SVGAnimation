import React from "react";
import "./SVGAnimation.css";
import SVGFigures from "./SVGFigures/SVGFigures";
import SVGFigureEditor from "./SVGFigureEditor/SVGFigureEditor";
import SVGCanvas from "./SVGCanvas/SVGCanvas";
import { Figure } from "./static/Figure";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


//TODO use SVG inline instead of fontawesome

class SVGAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFigure: null,
      figures: [],
      figuresLength: 0,
      delete: true,
    };
  }

  componentWillMount(){
    //Dont know better solution
    const figures = [ new Figure(), new Figure() ];
    figures[0].id = 1;
    figures[0].name += figures[0].id;
    figures[1].id = 2;
    figures[1].name += figures[1].id;
    this.setState({figures, selectedFigure: figures[0], figuresLength: 2});
  }

  componentDidMount() {
    console.log("SVGAnimation Mounted");
  }

  addFigure = () => {
    let figure = new Figure();
    let figuresLength = this.state.figuresLength + 1;
    figure.id = figuresLength;
    figure.name += " " + figure.id;  
    this.setState(prevState => ({
      figures: [...prevState.figures, figure],
      figuresLength: figuresLength
    }));
  }
  
  deleteFigure = (e,id) => {
    e.stopPropagation(); //clicking on list item triggered showActorEditor
    let figures = [...this.state.figures];
    let figureToDeleteIndex = figures.findIndex(figure => figure.id === id);
    figures.splice(figureToDeleteIndex, 1);
    let isSelectedFigure = this.state.selectedFigure !== null 
      ? this.state.selectedFigure.id === id 
      : false;

    isSelectedFigure
      ?  this.setState({figures,selectedFigure: null})
      : this.setState({figures});
  }

  isActiveFigure = (id) => {
    let selectedFigureId = this.state.selectedFigure !== null ? this.state.selectedFigure.id : -1;
    let isActive = selectedFigureId === id;
    return isActive ? 'active-figure': '';
  }

  showFigureEditor = (id) => {
    let selectedFigure = this.state.figures.find(figure => figure.id === id);
    this.setState({selectedFigure});
  }

  renderFiguresList = () =>{
    return this.state.figures.map( (item, key) => {
      return (
        <li 
          key={item.id} 
          className={'list-group-item list-figure ' + this.isActiveFigure(item.id) } 
          onClick={() => this.showFigureEditor(item.id)}>
          {item.name} 
        <FontAwesomeIcon 
          onClick={(e) => this.deleteFigure(e,item.id)} 
          className="delete-figure" 
          icon={faTrash} 
          size="1x" /> 
        </li>
      );
    });
  }

  changeFigureValue = (type,value) => {
    let figures = [...this.state.figures];
    let selectedFigure = this.state.selectedFigure;
    let selectedFigureIndex = figures.findIndex(figure => figure.id === selectedFigure.id);
    switch(type) {
      case "name": {
        selectedFigure.name = value;
        break;
      }
      case "figureType": {
        selectedFigure.figureType = value;
        break;
      }
      case "animationType": {
        selectedFigure.animationType = value;
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
      default: {
        break;
      }
    }
    figures[selectedFigureIndex] = selectedFigure;
    this.setState({figures,selectedFigure});
  }

  render() {
    console.log("SVGAnimation rendered");
    return (
      <div className="container-fluid h-100 bg-white">
        <div className="row h-100">
          <div className="col-lg-3 p-0  overflow-auto">
            <SVGFigures 
              addFigure={this.addFigure} 
              renderFiguresList={this.renderFiguresList} />
          </div>
          <div className="col-lg-4 h-100 bg-light overflow-auto">
           <SVGFigureEditor 
              changeFigureType={this.changeFigureType}
              changeFigureValue={this.changeFigureValue}
              selectedFigure={this.state.selectedFigure} /> 
          </div>
          <div className="col-lg-5 p-0 h-100" >
            <SVGCanvas figures={this.state.figures}/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default SVGAnimation;
