import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Glassmorphism from './pages/Glassmorphism'
import PageNotFound from './pages/errors/PageNotFound'

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Glassmorphism />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}