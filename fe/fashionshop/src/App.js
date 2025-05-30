import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/HomePage/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Profile from './components/Profile/Profile'; 
import EditProfile from './components/Profile/EditProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/profile/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
