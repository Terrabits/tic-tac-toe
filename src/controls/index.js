import './controls.css';


export default function Controls(props) {
  return (
    <div id="controls">
      <button id="undo"    onClick={props.undo}>    Undo    </button>
      <button id="restart" onClick={props.restart}> Restart </button>
    </div>
  );
}
