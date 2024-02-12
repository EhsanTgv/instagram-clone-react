import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home"
import NoMatch from './Pages/404Page/404Page';

class App extends React.Component {
  state = {
    isLog: false
  }
  render() {
    const { isLog } = this.state;
    return (
      <div>
        <Routes>
          <Route exact path='/' render={() => !isLog ? <Login isLogin={this.hanleLogin} /> : <Home />} />
          <Route path='*' element={NoMatch} />
        </Routes>
      </div>
    )
  }
}

export default App;
