import './App.css';
import Container from './Components/Container';
import Grid from './Components/Grid';
import { useState } from 'react';
function App() {
  const [score, setscore] = useState(0)
    function scorehandler(x){
        setscore(score+x);
    }
  return (
    <div className="App">
      <h1>Minesweeper</h1>
      <Grid scorefn={scorehandler} sz={4} />
    </div>
  );
}

export default App;
