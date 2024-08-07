import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Services from './pages/services';
import Features from './pages/features';
import Home from './pages/home';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/features" element={<Features />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App;
