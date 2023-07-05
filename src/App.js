import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA.js'
import Videos from './Videos.js';
import Footer from './Footer.js';

function App() {
  return (

    <div>
    
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          This is a ReactJS app. Learn React:
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          react.dev
        </a>

        <br></br>

        <a
          className="App-link"
          href="https://www.rmreact.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          rmreact.com
        </a>

        <br></br>

      </header>

      <body>

        <ComponentA />

        <Videos />

        <Footer />

      </body>

    </div>
  );
}

export default App;