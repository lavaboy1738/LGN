import React from 'react';
import './App.scss';
import {PopularGamesURL} from "./api";

function App() {
  const url = PopularGamesURL();
  console.log(url);
  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
