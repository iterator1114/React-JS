import './App.css';
import State from './State'
import Rando from './Changestate';
import Brokenclick from './Brokenclick';

function App() {
  return (
    <div className="App">
      <State />
      <Rando maxNum={10} />
      <Brokenclick />
    </div>
  );
}

export default App;
