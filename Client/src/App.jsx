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
import SignUp from "./pages/SignUp"
import Profile from "./components/Profile"
import ChangePass from "./components/ChangePass"
import Notification from "./components/Notification"
import PdfInvoice from "./components/PDF/PdfInvoice"
import { useLocation } from "react-router-dom";
import Admin from "./components/Admin"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const location  = useLocation();
  const isAuthenticated = true;
  return (
    <div>
      {location.pathname !== "/pdf" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/pdf" element={<PdfInvoice />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element= {<Portal />} />
            <Route path= "mess" element={<Mess />} />
            <Route path= "invoices" element={<Invoices />} />
            <Route path= "suggestions" element={<Suggestions />} />
            <Route path= "complaints" element={<Complaints />} />
            <Route path= "settings" element={<Settings />} />
            <Route path= "profile" element={<Profile />} />
            <Route path= "change_password" element={<ChangePass /> } />
            <Route path= "notifications" element={<Notification /> } />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App