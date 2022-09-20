import Board from '../board';
import './history.css'


export default function History(props) {
  const historyListItems = props.list.map((squares, index) => {
    return (
      <li className="history-list-item" key={index}>
        <Board squares={squares} onClicks={Array(9).fill(null)} />
      </li>
    );
  });

  return (
    <ol className="history-list">
      {historyListItems}
    </ol>
  )
}
