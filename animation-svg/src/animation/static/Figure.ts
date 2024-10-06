import Animation from './Animation';
import { MetadataObj } from '../redux/reducers/utils';


export class Figure implements MetadataObj {
    static staticId: number = 1;
    _id: number;
    hrefid: string;
    name: string;
    figureType: string;
    animationType: string;
    xPosition: number;
    yPosition: number;
    numOfSides: number;
    opacity: number;
    strokeWidth: number;
    fill: any;
    stroke: any;
    size: number;
    animationEnabled: boolean;
    animation: Animation = new Animation(this.hrefid);

    constructor() {
        this._id = Figure.staticId;
        this.hrefid = 'figure' + this.id;
        this.name = 'Figure ' + this.id;
        this.figureType = 'Circle'
        this.animationType = 'Move down'
        this.xPosition = 50;
        this.yPosition = 100;
        this.numOfSides = 3;
        this.opacity = 1;
        this.strokeWidth = 1;
        this.fill = {};
        this.stroke = {};
        this.size = 50;
        this.animationEnabled = true;
        this.animation = new Animation(this.hrefid);
        Figure.staticId++;
    }
    set id(newid: number) {
        this._id = newid;
        this.hrefid = 'figure' + newid;
        if (this.name !== undefined) this.name = 'Figure ' + newid;
        if (this.animation !== undefined) this.animation.href = '#' + this.hrefid;
    }

    get id(): number { return this._id }
}