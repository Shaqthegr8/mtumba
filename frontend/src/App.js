import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SellerPortal from './SellerPortal';
import BuyerPortal from './BuyerPortal';
import './styles.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BuyerPortal />} /> {/* Default to Buyer */}
          <Route path="/seller" element={<SellerPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
