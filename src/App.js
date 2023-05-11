
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Gallery from './components/Gallery/Gallery';
import BlogDetail from './components/BlogDetail/BlogDetail';
import GalleryDetail from './components/GalleryDetail/GalleryDetail';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AddDorm from './components/Admin/AddDorm/AddDorm';
import AddBlog from './components/Admin/AddBlog/AddBlog';
import Register from './components/Auth/Register/Register';
import UserDashboard from './components/UserDashboard/UserDashboard';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/student-dashboard" element={<UserDashboard/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blog-detail" element={<BlogDetail/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/gallery-detail" element={<GalleryDetail/>} />


          {/* ADMIN DASHBOARD */}
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/admin/add-dorm" element={<AddDorm/>} />
          <Route path="/admin/add-blog" element={<AddBlog/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;


