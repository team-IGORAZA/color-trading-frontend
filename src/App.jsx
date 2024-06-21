import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './widgets/Navbar';
import GameScreen from './screens/GameScreen';
import WalletScreen from './screens/WalletScreen';
import HistoryScreen from './screens/HistoryScreen';
import UserScreen from './screens/UserScreen';
import PredictionScreen from './screens/PredictionScreen';

function AppContent() {
  const location = useLocation();
  const shouldShowNavbar = !location.pathname.startsWith('/game/');

  return (
    <div>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<GameScreen />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/game/:id" element={<PredictionScreen />} />
        <Route path="/history" element={<HistoryScreen />} />
        <Route path="/wallet" element={<WalletScreen />} />
        <Route path="/user" element={<UserScreen />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
