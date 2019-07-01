import { Figure } from './Figure'

const figuresForProjects1 = [new Figure(), new Figure(), new Figure()];
figuresForProjects1[0].fill.hex = '#EB144C' // czerwony
figuresForProjects1[1].fill.hex = '#FCB900' //żólty
figuresForProjects1[1].xPosition = 200;
figuresForProjects1[2].fill.hex = '#00D084'
figuresForProjects1[2].xPosition = 350;

const figuresForProjects2 = [new Figure(), new Figure(), new Figure()];
figuresForProjects2[0].fill.hex = '#FCB900'
figuresForProjects2[1].fill.hex = '#FCB900'
figuresForProjects2[1].xPosition = 200;
figuresForProjects2[2].fill.hex = '#FCB900'
figuresForProjects2[2].xPosition = 350;

const figuresForProjects3 = [new Figure(), new Figure(), new Figure()];
figuresForProjects3[0].fill.hex = '#EB144C'
figuresForProjects3[1].fill.hex = '#EB144C'
figuresForProjects3[1].xPosition = 200;
figuresForProjects3[2].fill.hex = '#EB144C'
figuresForProjects3[2].xPosition = 350;


export const FiguresForProjects = [figuresForProjects1, figuresForProjects2, figuresForProjects3]