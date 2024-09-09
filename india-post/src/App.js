import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Services from './pages/services';
import Features from './pages/features';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Register from './pages/register';


function App() {
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Services />} />
      <Route path="/features" element={<Features />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App;