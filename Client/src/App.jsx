
import { Routes, Route } from "react-router-dom"
import About from "./components/About"
import Landing_Page from "./pages/Landing_Page"
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"
import Dashboard from "./pages/Dashboard"


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App