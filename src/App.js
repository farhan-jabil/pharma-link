import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login/Loginn';
import Dashboard from './pages/admin/Dashboard';



function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/adminDashboard' element={<Dashboard/>}></Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
