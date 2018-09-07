export class App {
  constructor() {
     this.currentDate = new Date();
     this.update();
     setInterval(() => this.update(), 1000);
  }
  update() {
    this.myCurrency = Math.random() * 1000;
 }
}
