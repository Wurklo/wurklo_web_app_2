import React from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorePage from './pages/StorePage';
import Coin from './pages/Coin';
import Wurklo from './pages/Wurkloapp';
import Nft from './pages/Nftabout';
import { useEffect } from 'react';
import { useStateValue } from './redux/StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import BuyNow from './pages/BuyNow'
const promise = loadStripe('pk_live_51JYEXdBXcG2jvy6vyRVjj3OAvZy9GZ1Hpa87EX34I5Gq0QFyaKcUdBLLfFlYYExdCNB1HBowg87ztJHcdsSjjjFB00nj9IRUQc');

function App() {
  // eslint-disable-next-line
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="buynow" element={<BuyNow />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="coin" element={<Coin />} />
          <Route path="wurklo" element={<Wurklo />} />
          <Route path="nft" element={<Nft />} />
          <Route path="storePage" element={
            <Elements stripe={promise}>
              <StorePage />
            </Elements>
            }/>
          {/* <Route path="roadmap" element={<Roadmap />} /> */}

          {/* <Route exact path='/' component={} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
