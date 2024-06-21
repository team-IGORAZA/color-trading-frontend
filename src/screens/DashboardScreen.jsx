import React from 'react'
import Navbar from '../widgets/Navbar'
import { Route, Routes } from 'react-router-dom'
import GameScreen from '../screens/GameScreen'
import HistoryScreen from '../screens/HistoryScreen'
import WalletScreen from '../screens/WalletScreen'
import UserScreen from '../screens/UserScreen'
import PredictionScreen from '../screens/PredictionScreen'

function DashboardScreen() {
    return (
        <Navbar>
            <Routes>
                <Route path="game" element={<GameScreen />} />
                <Route path="game/:id" element={<PredictionScreen />} />
                <Route path='history' element={<HistoryScreen />} />
                <Route path='wallet' element={<WalletScreen />} />
                <Route path='user' element={<UserScreen />} />
            </Routes>
        </Navbar>
    )
}

export default DashboardScreen