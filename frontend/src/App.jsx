import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CRUD from './pages/CRUD';
import Contact from './pages/Contact';
import About from './pages/About';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      
        <div className="App d-flex flex-column min-vh-100">
          <Navbar />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route element={<ProtectedRoute />}> */}
                <Route path="/watchlist" element={<CRUD />} />
              {/* </Route> */}

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        
        {/* <Footer /> */}
      
    </Router>
  );
}

export default App;
