import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exactl path='/' element={Login} />
      </Routes>
    </div>
  );
}

export default App;
