const uuidv1 = require('uuid/v1');

export class Project {
    constructor() {
        this.id = uuidv1();
        this.name = ("Project " + this.id).substr(0,25);
        this.figuresList = [];
    }
    // get id() {
        // return this.id;
    // }
    // set id(value) {
        // throw new Error("Uuid is immutable");
    // }

}