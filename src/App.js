
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
