// import { Sidebar } from '../components/Sidebar/Sidebar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage } from './pages/LoginPage';
import { Layout } from '../components/Layout';
import { DashboardPage } from './pages/DashboardPage';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Route for Login Page (no layout) */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Routes that use the Layout with Sidebar */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <Route path="/buy-airtime" element={<BuyAirtimePage />} /> */}
          {/* Add other routes here */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;