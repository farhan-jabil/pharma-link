import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Loginn";
import Dashboard from "./pages/admin/Dashboard";
import SidePanel from "./components/layouts/SidePanel";
import Navbar from "./components/layouts/Navbarr";
import Medicine from "./pages/admin/Medicine";
import Order from "./pages/admin/Order";

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
          <Route
            path="/adminOrder"
            element={
              <>
                <Navbar/>
                  <SidePanel>
                    <Order />
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
