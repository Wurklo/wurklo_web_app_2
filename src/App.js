import React from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './pages/Home/LandingPage';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResults from './pages/SearchResults/SearchResults';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
