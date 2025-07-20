import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ExplorePage from './pages/ExplorePage'
import CommentPage from './pages/CommentPage'
import './App.css'
import './Responsive.css'

export default function App() {

  return (
      <Router>
        <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/comment" element={<CommentPage />} />
            </Routes>
          </main>
        <Footer />
      </Router>
  )
}

