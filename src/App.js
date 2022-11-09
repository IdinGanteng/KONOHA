import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
     <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
