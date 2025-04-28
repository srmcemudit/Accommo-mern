import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Landing_Page from "./pages/Landing_Page";
import Contact from "./components/Contact";
import Portal from "./components/Portal";
import Mess from "./components/mess";
import Suggestions from "./components/Suggestions";
import Complaints from "./components/Complaints";
import Settings from "./components/Settings";
import Invoices from "./components/Invoices";
import SignUp from "./pages/SignUp";
import Profile from "./components/Profile";
import ChangePass from "./components/ChangePass";
import Notification from "./components/Notification";
import PdfInvoice from "./components/PDF/PdfInvoice";
import Admin from "./components/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/Logout";
import AdminPortal from "./components/AdminPortal";
import Rooms from "./components/Rooms";
import Payments from "./components/Payments";
import Complaint_Resolve from "./components/Complaint_Resolve";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing_Page />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/pdf" element={<PdfInvoice />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />}>
        <Route index element={<AdminPortal />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="payments" element={<Payments />} />
        <Route path="acomplaints" element={<Complaint_Resolve />} />
        <Route path="asettings" element={<Settings />} />
      </Route>
      <Route path="/Dashboard" element={<ProtectedRoute />}>
        <Route index element={<Portal />} />
        <Route path="mess" element={<Mess />} />
        <Route path="admin" element={<Admin />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="suggestions" element={<Suggestions />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="change_password" element={<ChangePass />} />
        <Route path="notifications" element={<Notification />} />
      </Route>
    </Routes>
  );
}

export default App;
