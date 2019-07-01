export class Animation {
  href: string;
  attributeName: string;
  from: number;
  to: number;
  additive: string;
  repeatCount: string;
  calcMode: string;
  keyTimes: string;
  keySplines: string;
  dur: number;
  begin: string;
  fill: string;
  r: number;

  constructor(id: string) {
    this.href = "#" + id;
    this.attributeName = "cy";
    this.from = 0;
    this.to = 100;
    this.additive = "sum";
    this.repeatCount = "indefinite";
    this.calcMode = "spline";
    this.keyTimes = "0;1";
    this.keySplines = ".42 0.5 0.5 1";
    this.dur = 5;
    this.begin = "0s";
    this.fill = "remove";
    this.r = 0;
  }
}

export default Animation;