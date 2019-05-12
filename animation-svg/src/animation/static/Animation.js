export class Animation {
  constructor(id) {
      this.href = "#" + id;
      this.attributeName="cx";
      this.from = "0";
      this.to = "100";
      this.additive = "sum";
      this.repeatCount = "10";
      this.calcMode = "spline";
      this.keyTimes = "0;1";
      this.keySplines = ".42 0 1 1";
      this.dur = "1s";
      this.begin = "0s";
      this.fill = "freeze";
  }
}


export default Animation;
