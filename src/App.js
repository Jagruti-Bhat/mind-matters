import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import {Home, Apple, Navbar, Header, Cards} from "./components"


function App() {
  return (
    <><><Navbar /><BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/apple" element={<p>apple</p>} /> */}
      </Routes>
    </BrowserRouter>
      <Header /></><Cards /></>
  );
}

export default App;
