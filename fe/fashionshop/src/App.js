import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/HomePage/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Profile from './components/Profile/Profile'; 
import EditProfile from './components/Profile/EditProfile';
import NotificationProfile from './components/Profile/NotificationProfile';
import ProfileAddress from './components/Profile/ProfileAddress';
import EditAddress from "./components/Profile/EditAddress";
import AddAddress from "./components/Profile/AddAddress";
import About from './components/About/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
         <Route path="/about" element={<About />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/profile/edit-profile" element={<EditProfile />} />
        <Route path="/profile/notification" element={<NotificationProfile />} />
         <Route path="/profile/address" element={<ProfileAddress />} />
         <Route path="/profile/address/edit/:id" element={<EditAddress />} />
         <Route path="/profile/address/add" element={<AddAddress />} />
      </Routes>
    </Router>
  );
}

export default App;
