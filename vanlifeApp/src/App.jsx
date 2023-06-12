import { React, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans";
import "./Styles/default.css";

function Navbar(){
  return(
    <nav className="nav">
        <Link to="/">
            <h2 className="nav--title">#VANLIFE</h2>
        </Link>
        <ul className="nav--options">
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/vans">
                <li>Vans</li>
            </Link>
        </ul>
    </nav>
  )
}

function Footer(){
  return(
    <footer>
      <h3>Ⓒ 2023 #VANLIFE</h3>
    </footer>
  )
}

function App() {
  const [vans, setVans] = useState();

  useEffect(() => {
    fetch("/vanData.json")
      .then((res) => res.json())
      .then((data) => setVans(data))
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/vans' element={<Vans vans={vans}/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;