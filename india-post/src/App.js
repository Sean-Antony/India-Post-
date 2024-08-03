import logo from './logo.svg';
import './App.css';
import './components/leftpanel'
import LeftPanel from './components/leftpanel';

function App() {
  return (
    <div className="App">
      <h1 class="text-3xl font-bold underline">
      Hello world!
      </h1>
      <div className='left'>
        <LeftPanel/>
      </div>
    </div>
  );
}

export default App;
