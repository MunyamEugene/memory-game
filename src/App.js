import GameComponent from "./components/GameComponent";
import './index.css'
function App() {
  return (
    <div className="App">
      <div className="title">LET 'S INCREASE OUR SHORT MEMORY</div>
      <GameComponent rawNum={5} colNum={5} activeCellsCount={6} />
    </div>
  );
}

export default App;
