
import { Routes, Route } from "react-router-dom"
import About from "./components/About"
import Landing_Page from "./pages/Landing_Page"
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"
import Dashboard from "./pages/Dashboard"
import Portal from "./components/Portal"
import Mess from "./components/mess"


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element= {<Portal />} />
          <Route path= "mess" element={<Mess />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App