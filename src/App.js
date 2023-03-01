
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route to="/" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
