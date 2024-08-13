import './App.css';
import Counter from './components/Counter';
import {Typography}  from '@mui/material-ui/core'

function App() {
  return (
    <div className="App">
      <Typography variant="h2" >
        Hello world
      </Typography>
      <Counter />
    </div>
  );
}

export default App;
