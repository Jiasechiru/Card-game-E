import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import './App.css'
import HelloPage from './pages/HelloPage/HelloPage'
import StartPage from './pages/StartPage/StartPage'
import GamePage from './pages/GamePage/GamePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<HelloPage />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/game" element={<GamePage />} />

    </Routes>
  )
}

export default App
