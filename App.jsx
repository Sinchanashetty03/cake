import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CakeList from './components/CakeList';
import CakeDetails from './components/CakeDetails';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CakeList />} />
        <Route path="/cake/:id" element={<CakeDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
