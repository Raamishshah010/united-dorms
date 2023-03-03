
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Gallery from './components/Gallery/Gallery';
import BlogDetail from './components/BlogDetail/BlogDetail';
import GalleryDetail from './components/GalleryDetail/GalleryDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blog-detail" element={<BlogDetail/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/gallery-detail" element={<GalleryDetail/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
