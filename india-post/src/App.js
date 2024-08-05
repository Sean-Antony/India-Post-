import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './components/pages/loginpage';
import SignupPage from './components/pages/signuppage';
import LoginLeftPanel from './components/LoginLeftPanel';
import Home from './components/pages/home.js';

function App() {
  return (
    <><Home/>
   

      {/* Main Content */}
      {/* <div className="w-2/3 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </BrowserRouter> */}
       
    </>
  );
}

export default App;
