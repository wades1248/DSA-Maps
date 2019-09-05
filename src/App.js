import React from 'react';
import logo from './logo.svg';
import './App.css';
import HashMap from './hashmap'

function App() {
  function main(){
    const dummy = [{"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
    {"Wizard": "Gandolf"}, {"Human": "Aragon"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
    {"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"},
    {"Ent": "Treebeard"}]
    let lor = new HashMap()
    lor.MAX_LOAD_RATIO = 0.5;
    lor.SIZE_RATIO = 3;
    console.log(lor)
    for(let i = 0; i< dummy.length; i++){
      let key = Object.keys(dummy[i])[0]
      let val = dummy[i][key]
      lor.set(key,val)
    }
    console.log(lor)
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {main()}
      </header>
    </div>
  );
}

export default App;
