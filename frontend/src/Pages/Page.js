import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProductScreen from './Product';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import Login from './Login';
import Register from './Register';
import RewardScreen from './RewardScreen';
import Network from './Network';
function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductScreen />} />
        <Route path="/rewards" element={<RewardScreen />} />
        <Route path="/network" element={<Network />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default Page;
