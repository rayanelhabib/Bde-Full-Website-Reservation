import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import About from "./pages/About";



import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />

      </Routes>

      
    </Router>
  );
}

export default App;
