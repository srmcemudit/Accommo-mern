
import { Routes, Route } from "react-router-dom"
import About from "./components/About"
import Landing_Page from "./pages/Landing_Page"
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"
import Dashboard from "./pages/Dashboard"
import Portal from "./components/Portal"
import Mess from "./components/mess"
import Suggestions from "./components/Suggestions"
import Complaints from "./components/Complaints"
import Settings from "./components/Settings"
import Invoices from "./components/Invoices"


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
          <Route path= "invoices" element={<Invoices />} />
          <Route path= "suggestions" element={<Suggestions />} />
          <Route path= "complaints" element={<Complaints />} />
          <Route path= "settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App