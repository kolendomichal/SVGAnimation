import Animation from "./Animation"

export class Figure {
    static staticId = 1;
    constructor() {
        this.id = Figure.staticId;
        this.hrefid = 'figure' + this.id;
        this.name='Figure ' + this.id;
        this.figureType = 'Circle'
        this.animationType = 'Move down'
        this.xPosition = 50;
        this.yPosition = 100;
        this.numOfSides = 3;
        this.opacity = 1;
        this.strokeWidth = 1;
        this.fill= {};
        this.stroke= {};
        this.size = 50;
        this.animation = new Animation(this.hrefid);
        Figure.staticId++;
    }
    set id(newid) {
        this._id = newid; 
        this.hrefid = 'figure' + newid;
        if(this.name !== undefined) this.name='Figure ' + newid;
        if(this.animation !== undefined) this.animation.href = '#' + this.hrefid;
    }
    get id(){ return this._id }
}