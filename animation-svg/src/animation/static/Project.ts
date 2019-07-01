import { Figure } from "./Figure";
import { MetadataObj } from "../redux/reducers/utils";

const uuidv4 = require('uuid/v4');

export class Project implements MetadataObj {

    static staticId: string = uuidv4();
    id: string;
    name: string;
    figuresList: Figure[]

    constructor() {
        this.id = Project.staticId;
        this.name = `Project ${Project.staticId.substr(0,3)}`;
        this.figuresList = [];
        Project.staticId = uuidv4();
    }
}