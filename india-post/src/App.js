import logo from './logo.svg';
import './App.css';
import './components/leftpanel'
import LeftPanel from './components/leftpanel';
import LoginPage from './components/pages/loginpage';
import SignupPage from './components/pages/signuppage';

function App() {
  return (
    <div className="App">
      <h1 class="text-3xl font-bold underline">
      Hello world!
      </h1>
      <div className='left'>
        <LeftPanel/>
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage/>} />
              <Route path="/signup" element={<SignupPage/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
