import Game     from './game';
import ReactDOM from 'react-dom/client';
import './view.css';


export default class View {
  constructor() {
    this.root = ReactDOM.createRoot(document.getElementById("root"));
  }

  update(props) {
    this.root.render(<Game status={props.status} squares={props.squares} history={props.history} onClicks={props.onClicks} restart={props.restart} undo={props.undo}/>);
  }
}
