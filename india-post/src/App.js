import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './components/pages/loginpage';
import SignupPage from './components/pages/signuppage';
import LoginLeftPanel from './components/LoginLeftPanel';

function App() {
  return (
    <><LoginLeftPanel /><div className="App min-h-screen flex">
      {/* Left Panel */}
      <div className="w-1/3">

      </div>

      {/* Main Content */}
      <div className="w-2/3 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div></>
  );
}

export default App;
