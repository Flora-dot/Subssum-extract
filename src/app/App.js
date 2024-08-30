// import { Sidebar } from '../components/Sidebar/Sidebar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage } from './pages/LoginPage';
import { Layout } from '../components/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { BuyAirtimePage } from './pages/BuyAirtimePage';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Route for Login Page (no layout) */}
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="buy-airtime" element={<BuyAirtimePage />} />
          <Route path="user-profile" element={<UserProfilePage />} /> {/* UserProfile route */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;