import React from 'react'
import Navbar from './widgets/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GameScreen from './screens/GameScreen'
import WalletScreen from './screens/WalletScreen'
import HistoryScreen from './screens/HistoryScreen'
import UserScreen from './screens/UserScreen'
function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path='/' element={<GameScreen />} />
          <Route path='/game' element={<GameScreen />} />
          <Route path='/history' element={<HistoryScreen />} />
          <Route path='/wallet' element={<WalletScreen />} />
          <Route path='/user' element={<UserScreen />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  )
}


export default App