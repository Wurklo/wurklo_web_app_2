import React from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coin from './pages/Coin';
import Wurklo from './pages/Wurkloapp';
import Nft from './pages/Nftabout';
import BuyNow from './pages/BuyNow'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="buynow" element={<BuyNow />} />
          <Route path="coin" element={<Coin />} />
          <Route path="wurklo" element={<Wurklo />} />
          <Route path="nft" element={<Nft />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
