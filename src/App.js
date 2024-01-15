import React from "react";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <h1>Home</h1>} />
        <Route exact path='/exp' render={() => <h1>Exp</h1>} />
      </Switch>
    </div>
  );
}

export default App;
