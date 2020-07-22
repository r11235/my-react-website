import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dog from './Dog.js';
import ComponentA from './ComponentA.js'

function App() {
  return (

    <div>
    
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          This is a ReactJS app.
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

      <body>

        <ComponentA />

        <Dog />

      </body>

    </div>
  );
}

export default App;