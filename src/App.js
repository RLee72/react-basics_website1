
import './App.css';
import AboutMe from './AboutMe';
import Form from './Form';
import Gallery from './Gallery';
import Home from './Home';
import { Routes, Route, Link } from 'react-router-dom'; // remember to add BrowserROuter in index.js

function App() {
  return (
    <div className="App">
      
      <p  style={{ paddingTop: '50px'  }} ></p>
      <h1 style={{ lineHeight: '.1' }} className='fontstyle'>WELCOME</h1>
      <h2 className='h2'>Website test</h2>
      <p  style={{ paddingTop: '20px'  }} ></p>

        <nav className="nav">
          <Link to="/home" className ="nav-item"> Home </Link>
          <Link to="/form" className="nav-item"> Form </Link>
          <Link to="/gallery" className="nav-item"> Gallery </Link>
          <Link to="/about" className = "nav-item">  About  </Link>

        </nav>
        <Routes>
          <Route path = "/home" element={<Home />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
        </Routes>
        <p></p>
      
      <p  style={{ paddingTop: '20px'  }} ></p>
      <header className="App-header">
        Hello, some text here &nbsp; &nbsp; | &nbsp; &nbsp; More stuff Here &nbsp; &nbsp; | &nbsp; &nbsp; lalalalalalala 
      </header>
    </div>
  );
}

export default App;
