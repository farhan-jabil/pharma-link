import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Loginn";
import Dashboard from "./pages/admin/Dashboard";
import SidePanel from "./components/layouts/SidePanel";
import Navbar from "./components/layouts/Navbar";
import Medicine from "./pages/admin/Medicine";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/adminDashboard"
            element={
              <>
                <Navbar />
                <SidePanel>
                  <Dashboard />
                </SidePanel>
              </>
            }
          />
          <Route
            path="/adminMedicine"
            element={
              <>
                <Navbar />
                <SidePanel>
                  <Medicine />
                </SidePanel>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
