const lines = [
  // across
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // down
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonals
  [0, 4, 8],
  [2, 4, 6]
];

export default function calculateWinner(squares) {
  for (let i=0; i< lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === null) {
      // row not full
      continue;
    }
    if (squares[a] === squares[b] && squares[b] === squares[c]) {
      // winner
      return squares[a];
    }
  }
  // no winner found
  return null;
}

export { calculateWinner };
