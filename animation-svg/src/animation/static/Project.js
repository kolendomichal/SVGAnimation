const uuidv1 = require('uuid/v1');

export class Project {
    static staticId = 1;
    constructor() {
        this.id = uuidv1();
        this.name = `Project ${Project.staticId}`;
        this.figuresList = [];
        Project.staticId++;
    }
}