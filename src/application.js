import Controller from './controller.js';
import Model      from './model.js';
import View       from './view.js';


export default class Application {
  constructor() {
    this.model      = new Model();
    this.view       = new View();
    this.controller = new Controller(this.model, this.view);
  }

  get status() {
    return this.model.status;
  }

  restart() {
    this.controller.restart();
  }

  takeSquare(i) {
    this.controller.takeSquare(i);
  }

  undo() {
    this.controller.undo();
  }
}
