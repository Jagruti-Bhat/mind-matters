import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import {Home, Apple, Navbar, Header, Cards, Footer, Sos,Angry, Communities,Addnew,Archive,Journal} from "./components"
import {Link} from "react-router-dom"




function App() {
  return (
    <><Navbar /><BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/apple" element={<p>apple</p>} /> */}
        <Route path="/Sos" element={<Sos />} />
        <Route path="/Angry" element={<Angry/>} />
        <Route path="/Communities" element={<Communities/>}/>
        <Route path="/Journal" element={<Journal />} />
        <Route path="/Addnew" element={<Addnew />} />
        <Route path="/Archive" element={<Archive />} />
      </Routes>
    </BrowserRouter></>
      
      
  );
}

export default App;
