import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features"
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Features' element={< Features />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
