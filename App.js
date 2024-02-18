import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';

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

        <HelloWorld />
      </header>
    </div>
  );
}

//export default App;

export default function Square() {
  return <button className="square"><h1><App/></h1>X</button>;
}