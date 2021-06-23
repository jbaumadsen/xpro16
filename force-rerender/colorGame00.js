
const Square = ({id, player}) => {
  const [color, setColor] = React.useState('orange');
  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)];  
  return (
    <button onClick={(e) => {
      setColor(getRandomColor());
      e.target.style.background = color;
      e.target.innerHTML = `Player ${player}`;
      console.log(player);
    }}>
      <h1>{id}</h1>
    </button>
  );
}
const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);
  let status = `Player ${player}`;

  const reRender = () => setRandom(Math.random());

  const toggle = () => setMounted(!mounted);
  function renderSquare(i) {
    return <Square id={i} player={player}></Square>
  }

  return (
    <div
      className="game-board"
      onClick={(e) => {
        setPlayer((player % 2) + 1);
        status = `Player ${player}`;
      }}
    >
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}

      </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <button onClick={reRender}>Rerender</button>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
