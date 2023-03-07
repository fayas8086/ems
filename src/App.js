import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/edit' element={<Edit/>}/>
          </Routes>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
