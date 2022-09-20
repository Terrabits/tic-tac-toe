

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view  = view;

    // generate onClicks
    this.onClicks = Array(9);
    for (let i = 0; i < 9; i++) {
      this.onClicks[i] = () => this.takeSquare(i);
    }

    // render initial view
    this.updateView();
  }

  takeSquare(i) {
    console.log(`player ${this.model.players_turn} is taking square ${i}`);
    this.model.takeSquare(i);
    this.updateView();
  }

  restart() {
    this.model.restart();
    this.updateView();
  }

  undo() {
    this.model.undo();
    this.updateView();
  }

  get props() {
    return {
      status:   this.model.status,
      squares:  this.model.squares,
      onClicks: this.onClicks,
      restart:  this.restart.bind(this),
      history:  this.model.history,
      undo:     this.undo.bind(this)
    }
  }

  updateView() {
    this.view.update(this.props);
  }
}
