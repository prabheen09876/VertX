// App.jsx
import React from 'react';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import MarketTrackers from './Components/MarketTrackers';
import './index.css';
import VirtualExchange from './Components/VirtualExchange';
import WinnersLoosers from './Components/WinnersLoosers';
import ActiveStocks from './Components/ActiveStocks';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <MarketTrackers />
      <VirtualExchange />
      <WinnersLoosers />
      <ActiveStocks />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
