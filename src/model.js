import {calculateWinner} from './helpers.js';


// constants
const EMPTY_BOARD = Array(9).fill(null);


export default class Model {
  constructor() {
    this.restart();
  }

  restart() {
    this.players_turn = 'X';
    this.squares      = EMPTY_BOARD.slice();
    this.history      = [];
  }

  get status() {
    return this.winner?
        `Winner: ${this.winner}`
      : `Next Player: ${this.players_turn}`
  }

  takeSquare(i) {
    // invalid index?
    if (i < 0 || i > 8) {
      console.log(`player cannot take square: invalid square index '${i}'`);
      return;
    }

    // game over?
    if (this.winner) {
      console.log('player cannot take square: game is over');
      return;
    }

    // square already taken?
    if (this.squares[i] !== null) {
      console.log(`player cannot take square: square[${i}] is already occupied`);
      return;
    }

    // take square i
    this.history.push(this.squares.slice());
    this.squares[i] = this.players_turn;
    this.letNextPlayerGo();
  }

  undo() {
    if (this.history.length === 0) {
      console.log('cannot undo: history is empty');
      return;
    }

    // undo
    this.squares = this.history.pop();
    this.letNextPlayerGo();
  }

  // helpers

  get winner() {
    return calculateWinner(this.squares);
  }

  letNextPlayerGo() {
    const is_x_turn   = this.players_turn === 'X';
    const next_player = is_x_turn? 'O' : 'X';
    this.players_turn = next_player;
  }
}
