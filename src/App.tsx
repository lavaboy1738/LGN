import React from 'react';
import {Home} from "./pages/home";
import {GlobalStyles} from "./globalStyles";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Route path={["/game/:id", "/"]}>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
