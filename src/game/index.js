
import Board    from '../board';
import Controls from '../controls';
import History  from '../history';
import Status   from '../status';
import React    from 'react';


export default function Game(props) {
    return (
      <div className="game">
        <Status text={props.status} />
        <div className="game-board">
          <Board  squares={props.squares} onClicks={props.onClicks}/>
        </div>
        <Controls restart={props.restart} undo={props.undo} />
        <div className="game-info">
          <div className="history">History</div>
          <History list={props.history} />
        </div>
      </div>
    );
  }
