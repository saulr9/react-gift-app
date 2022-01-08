import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

const test = true;
function App() {
  function handleClick(item) {
    console.log('You clicked me!', item);
  }
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload 🔥
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
      <Footer />
    </div>
  );
}

export default App;
