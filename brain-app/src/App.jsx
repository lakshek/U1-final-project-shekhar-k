import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import components
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ExplorePage from './pages/ExplorePage'
import CommentPage from './pages/CommentPage'

// import CSS 
import './App.css'

// import responsive CSS
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

