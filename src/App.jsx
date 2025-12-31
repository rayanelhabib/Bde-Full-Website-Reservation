import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Home from './pages/Home'
import Reservation from './pages/Reservation'
import './App.css'

function App() {
  return (
    <Router>
      {/* NAVBAR TOUJOURS VISIBLE */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  )
}

export default App
