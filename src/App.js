import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './App.css';
import Navbar from './components/Navbar';
import Hokage from './pages/Hokage';

function App() {
  return (
    <div>
    <Navbar/>
     <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/hokage' element={<Hokage/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
