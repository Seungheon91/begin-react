/* 
import logo from './logo.svg';
import './App.css';
function App() {
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
      </header>
    </div>
  );
} 
*/
/* 
import React from "react";
import Hello from "./hello";
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <>
      <Hello name="react" color="red"/>
      <Hello color="red"/>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
 */


import React from "react";
import Hello from "./hello";
import Warapper from "./Wrapper";

function App() {
  return (
    <Warapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Warapper>
  );
}

export default App;
