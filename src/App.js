
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { useState } from "react";

function App() {

  const [loggedIn, isLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>Breaded</h1>
      <p>Bringing Home the Bread</p>
      <Routes>
        <Route path ="/" element={<Home loggedIn={loggedIn}/>}/>
      </Routes>
    </div>
  );
}

export default App;
