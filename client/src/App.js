import PokeDisplay from './components/poke_display';
import PokeForm from './components/poke_form';
import './App.css';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([])

  return (
    <div className="App">
      <PokeForm list={list} setList={setList} />
      <PokeDisplay list={list} />
    </div>
  );
}

export default App;
