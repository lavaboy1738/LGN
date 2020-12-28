import React, {useEffect} from 'react';
import './App.scss';
import {useDispatch} from "react-redux";
import {loadGames} from "./redux/actions/gamesAction";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadGames())
  })
  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
