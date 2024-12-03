import { BrowserRouter as Router,Routes,Route,Link/* ,NavLink  */} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Contactus from './component/ContactUs';
import Login from './component/Login';
import Dasboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dash' element={<Dasboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
