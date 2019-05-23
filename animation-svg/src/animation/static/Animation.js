export class Animation {
  constructor(id) {
      this.href = "#" + id;
      this.attributeName="cy";
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

/*
	Begin – dropdown -> do wyboru sekundy, kliknięcie lub opcja „Immediately”
	attributeName – dropdown, do wyboru po jakiej osi x/y
	from – slider
	to – slider
	repeatCount – slider z checkboxem „always” (domyślnie always)
	keyTimes – zmienialem ale nie zauwazylem wplywu
  keySplines – to jest zwiazane z keyTimes, pojebane i nie chcialo mi sie czytac
  dur= jak dlugo ma trwać cała animacja ( spowalnia jak długo ), slider

*/