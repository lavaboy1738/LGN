import React from 'react';
import {Home} from "./pages/home";
import {Nav} from "./Components/Nav";
import {GlobalStyles} from "./globalStyles";
import {Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Nav/>
      <Route path={["/game/:id", "/"]}>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
